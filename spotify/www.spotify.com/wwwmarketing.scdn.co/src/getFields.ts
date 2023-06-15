export function getCookie(name) {
    const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    return match ? match[1] : undefined;
}
export function getParam(name) {
    return (window.location.search.split(new RegExp(`[?&]${name}=`))[1] || '').split('&')[0];
}
//# sourceMappingURL=getFields.js.map