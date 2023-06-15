import { createBaseTransport, TransportEvent, } from '@spotify-internal/transport';
import { requestTransformerCreator } from '@spotify-internal/transport/es5/plugins/request_transformer';
export function getTransport() {
    const transport = createBaseTransport({
        providers: {
            endpoints: () => Promise.resolve({
                webgate: 'https://www.spotify.com/api/',
                webapi: 'https://api.spotify.com',
            }),
            token: () => Promise.resolve('NOT_A_TOKEN'),
        },
    });
    transport.addPlugin(requestTransformerCreator, {
        optionsOverrides: {
            authorize: false,
        },
    });
    return new Promise((resolve, reject) => {
        transport.once(TransportEvent.CONNECTED, () => {
            transport.authenticate().then(() => resolve(transport), reject);
        });
        transport.connect();
    });
}
//# sourceMappingURL=transport.js.map