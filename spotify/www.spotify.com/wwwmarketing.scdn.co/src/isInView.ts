export function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top < window.innerHeight &&
        rect.bottom >= 0);
}
//# sourceMappingURL=isInView.js.map