import {
  createUniversalReporter,
  createSemanticMetrics,
  MetricTypes,
  Time,
} from '@spotify-internal/semantic-metrics';
import { BrowserMetrics } from '@spotify-internal/semantic-metrics/esm/browser';
import { getCLS, getFID, getLCP } from 'web-vitals';
import ttiPolyfill from 'tti-polyfill';
import { setupTracer } from '@spotify-internal/tracing-web';
import { createTracedFetch, FetchHelpers } from '@spotify-internal/tracing-web';
import { FORMAT_HTTP_HEADERS, Tags, Span } from 'opentracing';

const { sendMetric } = createSemanticMetrics({
  key: 'www-marketing',
  reporter: createUniversalReporter(),
  dev: false,
});

export { sendMetric };

export function configureClientInstrumentation() {
  const tracer = setupTracer({
    dev: false,
    component_name: 'www-marketing',
  });

  const clientBridgeSpan = tracer.startSpan('client-bridge');
  clientBridgeSpan.setTag(Tags.SPAN_KIND, 'client');
  if (window.SPOTI_DATA?.traceContext) {
    tracer.inject(
      clientBridgeSpan,
      FORMAT_HTTP_HEADERS,
      window.SPOTI_DATA.traceContext,
    );
  }

  const clientFetch = createTracedFetch(
    { fetch: window.fetch },
    {
      tracer: tracer,
      shouldTrace: req => {
        const tracedURLHosts = ['spotify.com'] as const;

        return tracedURLHosts.some(p =>
          FetchHelpers.extractHostname(req)?.endsWith(p),
        );
      },
    },
  );

  window.fetch = (
    input: RequestInfo | URL,
    init?: RequestInit & { parentSpan?: Span },
  ) =>
    clientFetch(
      input as RequestInfo,
      {
        ...init,
        parentSpan: init?.parentSpan ?? clientBridgeSpan,
      } as RequestInit,
    );

  clientBridgeSpan.finish();

  /*
   * as per its event definition (https://ghe.spotify.net/datainfra/event-definitions/blob/master/events/SemanticMetricBrowserNonAuth.yaml)
   * only strings are allowed within tags.
   */
  const market = window.location.pathname.match(/^\/[a-z]{2}(-[a-z]{2})?\//i);
  const commonTags = {
    origin: window.location.origin,
    path: window.location.pathname.replace(
      /^\/[a-z]{2}(-[a-z]{2})?\//i,
      '/{spotifyMarket}/',
    ),
    market:
      market && typeof market[0] === 'string'
        ? market[0].replace(/\//g, '')
        : '',
    marketPath: window.location.pathname,
    device: 'onorientationchange' in window ? 'mobile' : 'desktop',
  };

  function reportWebVitals(metric: any) {
    sendMetric(BrowserMetrics.getWebVitalsMetric(metric, commonTags));
  }

  function getUserConnectionType() {
    if (!window.navigator.connection) {
      return 'unknown';
    }

    // @ts-ignore
    return window.navigator.connection.effectiveType;
  }

  // log users with JS enabled
  sendMetric({
    metric_type: MetricTypes.COUNTER,
    what: 'page-load',
    value: 1,
    tags: commonTags,
  });

  // log users connection speed
  sendMetric({
    metric_type: MetricTypes.COUNTER,
    what: 'connection',
    value: 1,
    tags: Object.assign({}, commonTags, {
      effective_type: getUserConnectionType(),
    }),
  });

  BrowserMetrics.getPageLoadTime().then(time => {
    sendMetric({
      metric_type: MetricTypes.TIMER,
      what: 'time-to-page-load-nanoseconds',
      value: Time.fromMillis(time).asNanos(),
      tags: commonTags,
    });
  });

  BrowserMetrics.getTimeToFirstPaint().then(time => {
    sendMetric({
      metric_type: MetricTypes.TIMER,
      what: 'time-to-first-paint-nanoseconds',
      value: Time.fromMillis(time).asNanos(),
      tags: commonTags,
    });
  });

  BrowserMetrics.getTimeToFirstContentfulPaint().then(time => {
    sendMetric({
      metric_type: MetricTypes.TIMER,
      what: 'time-to-first-contentful-paint-nanoseconds',
      value: Time.fromMillis(time).asNanos(),
      tags: commonTags,
    });
  });

  ttiPolyfill.getFirstConsistentlyInteractive().then(time => {
    if (time) {
      sendMetric({
        metric_type: MetricTypes.TIMER,
        what: 'time-to-interactive-nanoseconds',
        value: Time.fromMillis(time).asNanos(),
        tags: commonTags,
      });
    }
  });

  getCLS(reportWebVitals);
  getFID(reportWebVitals);
  getLCP(reportWebVitals);

  return clientBridgeSpan;
}
