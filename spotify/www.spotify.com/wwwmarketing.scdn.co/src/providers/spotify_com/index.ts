export function createEndpointsProvider() {
    return () => Promise.resolve({
        webgate: 'https://www.spotify.com/api/',
        webapi: 'https://api.spotify.com',
    });
}
export function createTokenProvider() {
    return () => Promise.resolve('NOT_A_TOKEN');
}
export function createProviders() {
    return {
        endpoints: createEndpointsProvider(),
        token: createTokenProvider(),
    };
}
//# sourceMappingURL=index.js.map