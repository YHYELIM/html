import { track } from '@spotify-internal/track-js';

export function initTrackingScripts({
  forceOneTrust,
  market,
  language,
  loggedIn,
}: {
  forceOneTrust?: boolean;
  market: string;
  language: string;
  loggedIn: boolean;
}) {
  track({
    dataLayerPushInitial: true,
    googleTagManagerId: 'GTM-7BJJ',
    market,
    language,
    loggedIn,
    oneTrust: forceOneTrust,
  });
}
