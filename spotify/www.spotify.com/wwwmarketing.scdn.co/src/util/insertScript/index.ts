export function insertExternalScript({ async, dataset, onError, onLoad, src, }) {
    const script = document.createElement('script');
    if (async)
        script.async = async;
    if (dataset) {
        Object.keys(dataset).map((key) => {
            script.dataset[key] = dataset[key];
        });
    }
    if (onError)
        script.addEventListener('error', onError);
    if (onLoad)
        script.addEventListener('load', onLoad);
    script.src = src;
    document.head.appendChild(script);
}
export function insertInlineScript({ innerHTML }) {
    const script = document.createElement('script');
    script.innerHTML = innerHTML;
    document.head.appendChild(script);
}
//# sourceMappingURL=index.js.map