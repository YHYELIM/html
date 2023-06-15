import {
  createResolver,
  ResolverConstructor,
} from '@spotify-internal/remote-config-core';
import { getTransportInstance } from './transport';
import { propertiesMiddleware } from '@spotify-internal/remote-config-middleware-properties';
import { transportProvider } from '@spotify-internal/remote-config-provider-transport';
import { exposureMiddleware } from '@spotify-internal/remote-config-middleware-exposure';
import { initialConfigMiddleware } from '@spotify-internal/remote-config-middleware-initial-config';
import { installationIdMiddleware } from '@spotify-internal/remote-config-middleware-installationid';

export const ClientResolver = createResolver(transportProvider)
  .addMiddleware(propertiesMiddleware)
  .addMiddleware(initialConfigMiddleware)
  .addMiddleware(exposureMiddleware)
  .addMiddleware(installationIdMiddleware);

type ClientResolverConfig = ConstructorParameters<typeof ClientResolver>[0];
type GetUnauthResolverConfig = {
  transport?: ClientResolverConfig['transport'];
  timeout: ClientResolverConfig['timeout'];
  initialConfiguration: Required<ClientResolverConfig['initialConfiguration']>;
};

export const getUnauthResolver = async (
  cfg: GetUnauthResolverConfig,
): Promise<ResolverConstructor.Resolver<typeof ClientResolver>> => {
  const transport = cfg.transport ?? (await getTransportInstance());
  return new ClientResolver({
    ...cfg,
    clientId: 'www-marketing',
    transport,
  });
};
