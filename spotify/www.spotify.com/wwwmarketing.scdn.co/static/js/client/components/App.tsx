import React, { useEffect, memo } from 'react';
import { initTrackingScripts } from '../lib/tracking-scripts';
import { attachAnalyticsListeners } from '@spotify-internal/touchdown-analytics';
import Page from '../../shared/components/Page';
import { globalTracer, Span } from 'opentracing';
import { WindowSpotiData } from '../types';
import { getUnauthResolver } from '../lib/remote-config';
import { Configuration } from '@spotify-internal/remote-config-properties';
import * as Sentry from '@sentry/react';

type AppProps = Omit<
  WindowSpotiData,
  'environment' | 'release' | 'useErrorReporting' | 'useInstrumentation'
>;

export type DecoratedAppProps = AppProps & {
  baseElement?: HTMLElement;
  parentSpan?: Span;
};

async function remoteConfigExecutor(remoteConfiguration: string) {
  try {
    const initialConfiguration = Configuration.fromJSON(remoteConfiguration);
    const resolver = await getUnauthResolver({
      initialConfiguration,
      timeout: 5000,
    });
    resolver.resolve({ username: null }).catch(e => {
      Sentry.withScope(function clientsideRemoteConfigResolverHandler(scope) {
        scope.setExtra('rejection', e);
        Sentry.captureException(
          new Error('remote config resolution client: resolve error'),
        );
      });
    });
  } catch (e) {
    Sentry.withScope(function clientsideRemoteConfigMainHandler(scope) {
      scope.setExtra('rejection', true);
      Sentry.captureException(
        new Error('remote config resolution client: error'),
      );
    });
  }
}

const App = (props: DecoratedAppProps) => {
  const {
    baseElement,
    parentSpan: indexSpan,
    user,
    language,
    pageName,
    resourceName,
    market,
    country,
    forceOneTrust,
    pageData,
    direction,
    remoteConfiguration,
    device,
  } = props;

  const tracer = globalTracer();
  const appSpan = tracer.startSpan('app', { childOf: indexSpan });

  const pageProps = {
    market,
    direction,
    user,
    pageData,
    language,
    parentSpan: appSpan,
    device,
  };

  useEffect(() => {
    if (remoteConfiguration) {
      remoteConfigExecutor(remoteConfiguration);
    }
  }, [remoteConfiguration]);

  useEffect(() => {
    if (language) {
      initTrackingScripts({
        forceOneTrust,
        market,
        language,
        loggedIn: user.authenticated,
      });
    }
  }, [forceOneTrust, market, language, user.authenticated]);

  useEffect(() => {
    if (baseElement) {
      attachAnalyticsListeners({
        analyticsRoot: baseElement,
        isAuthenticated: user.authenticated ?? false,
        pageName,
        resourceName,
        language,
        countryCode: country ?? '',
        eventParams: pageData.eventParams ?? {},
      });
    }
  }, [
    baseElement,
    user.authenticated,
    pageName,
    resourceName,
    language,
    country,
    pageData.eventParams,
  ]);

  appSpan.finish();

  return <Page {...pageProps} />;
};

export default memo(App);
