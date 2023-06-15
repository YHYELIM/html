import type { Transport, EndpointsProvider } from '@spotify-internal/transport';
import { createBaseTransport } from '@spotify-internal/transport';
import { requestTransformerCreator } from '@spotify-internal/transport/lib/plugins/request_transformer';
import { createTokenProvider } from '@spotify-internal/transport/lib/providers/spotify_com';

function createEndpointsProvider(): EndpointsProvider {
  return () =>
    Promise.resolve({
      webgate: '/api/',
      webapi: 'https://api.spotify.com',
    });
}

export type { Transport } from '@spotify-internal/transport';

export const getTransportInstance = async () => {
  const transportInstance = createBaseTransport({
    providers: {
      endpoints: createEndpointsProvider(),
      token: createTokenProvider(),
    },
    requestMode: 'fetch',
  });

  transportInstance.addPlugin(requestTransformerCreator, {
    optionsOverrides: {
      // This will set 'authorize' to false on all requests.
      authorize: false,
    },
  });

  if (!transportInstance.isConnected()) {
    await transportInstance.connect();
  }
  await transportInstance.authenticate();
  return transportInstance as unknown as Transport;
};
