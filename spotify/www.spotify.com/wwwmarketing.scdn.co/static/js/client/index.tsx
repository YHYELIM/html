import 'react-app-polyfill/stable';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import * as Sentry from '@sentry/react';
import {
  ExtraErrorData,
  Offline,
  ReportingObserver,
} from '@sentry/integrations';
import { configureClientInstrumentation } from './lib/client-instrumentation';
import { globalTracer, Tags } from 'opentracing';
import { WindowSpotiData } from './types';

import '@spotify-internal/landing-page-library/esm/styles/masthead/index.css';
import '@spotify-internal/landing-page-library/esm/styles/encore-light-theme/encore-light-theme.css';

type Props = WindowSpotiData;

const main = (data: Props) => {
  const {
    environment,
    release,
    useErrorReporting,
    useInstrumentation,
    ...appProps
  } = data;

  Sentry.init({
    dsn: 'https://09d927c146bb46728e7b701c2122e066@o22381.ingest.sentry.io/6303532',
    sampleRate: 0.2,
    environment,
    release: release,
    beforeSend: event => (useErrorReporting ? event : null),
    ignoreErrors: [
      /((Time to paint|navigationTiming) api is not supported)|(twttr)|(fbq)|(IntersectionObserver)|(Deprecation messages are stored in the devtools-frontend)/gim,
    ],
    integrations: [
      new ExtraErrorData(),
      new Offline(),
      new ReportingObserver({
        types: ['crash', 'deprecation', 'intervention'],
      }),
    ],
    initialScope: {
      // extract the user' unauth tracking ID
      user: {
        id: (() => {
          const parts = `; ${document.cookie}`.split(`; sp_t=`);
          return parts.length === 2 ? parts.pop()?.split(';').shift() : '';
        })(),
      },
    },
    allowUrls: [/(spotify\.(com|net))|(scdn\.co)|(spotifycdn\.com)/gim],
  });

  let clientBridgeSpan;
  if (useInstrumentation) {
    clientBridgeSpan = configureClientInstrumentation();
  }

  const tracer = globalTracer();
  const hydrationSpan = tracer.startSpan('hydration', {
    childOf: clientBridgeSpan,
  });
  hydrationSpan.setTag(Tags.SPAN_KIND, 'client');

  const baseElement = document.getElementById('spoti-root');
  const app = (
    // @ts-ignore
    <Sentry.ErrorBoundary
      onError={(e, componentStack, eventId) => {
        const componentErrorSpan = tracer.startSpan('app-render-error', {
          childOf: hydrationSpan,
        });
        componentErrorSpan.addTags({
          [Tags.SPAN_KIND]: 'client',
          [Tags.ERROR]: true,
        });
        componentErrorSpan.log({
          event: 'error',
          'error.object': e,
          'error.kind': e.name,
          message: e.message,
          stack: e.stack,
          'component.stack': componentStack,
          eventId,
        });
        componentErrorSpan.finish();
      }}
    >
      <App
        baseElement={baseElement!}
        parentSpan={hydrationSpan}
        {...appProps}
      />
    </Sentry.ErrorBoundary>
  );

  ReactDom.hydrate(app, baseElement);

  hydrationSpan.finish();
};

main(window.SPOTI_DATA);
