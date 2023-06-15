import React, { memo, useLayoutEffect, useRef, useContext } from 'react';
import debounce from 'lodash.debounce';
import DirectionContext from '../../configuration/context/direction';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import { Wrapper, CustomHeader, CarouselContainer, CardsContainer, Card, BackgroundGradient, SelectorsNavigation, SelectorsContainer, SelectorWrapper, Selector, LogoArea, CardDescription, Logo, SelectorsFloater, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Carousel(props) {
    const carouselCardId = (id) => `carousel-card-${id}`;
    const { container, header, eventParams, cards, labels } = props;
    const direction = useContext(DirectionContext);
    const carouselContainerRef = useRef();
    useLayoutEffect(() => {
        const noop = () => { };
        const carousel = carouselContainerRef.current;
        if (!carousel) {
            return noop;
        }
        const firstChild = carousel.children[0];
        const childWidth = firstChild.offsetWidth;
        const onScroll = (e) => {
            if (!e.target) {
                return;
            }
            const target = e.target;
            const scrollPosition = Math.abs(target.scrollLeft);
            const element = Math.round(scrollPosition / childWidth);
            history.replaceState(null, '', `#${carouselCardId(element)}`);
            const selectors = target.querySelectorAll('nav a div');
            selectors.forEach((selector, i) => {
                const currentElement = selector;
                currentElement.dataset.active = (i === element).toString();
            });
            return;
        };
        carousel.addEventListener('scroll', debounce(e => onScroll(e), 500));
        const hashElement = () => {
            const hash = window.location.hash;
            if (!hash.length) {
                return 0;
            }
            const hashGroup = hash.split('-');
            const hashPosition = hashGroup[hashGroup.length - 1];
            return /[0-9]{1,2}/.test(hashPosition) ? parseInt(hashPosition, 10) : 0;
        };
        const scrollPosition = (direction === 'rtl' ? -1 : 1) * (hashElement() * childWidth);
        carousel.scrollTo(scrollPosition, 0);
        return () => {
            carousel.removeEventListener('scroll', onScroll);
        };
    }, [carouselContainerRef, direction]);
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(Wrapper, null,
            header && React.createElement(CustomHeader, Object.assign({}, header)),
            React.createElement(CarouselContainer, null,
                React.createElement(CardsContainer, { ref: carouselContainerRef, "aria-label": labels.CAROUSEL, totalCards: cards.length },
                    cards &&
                        cards.map((card, i) => (React.createElement(Card, Object.assign({ totalCards: cards.length, "aria-label": `${labels.SLIDE} ${i + 1}`, forwardedAs: "li", key: carouselCardId(i), id: carouselCardId(i), tabIndex: 0 }, card),
                            React.createElement(BackgroundGradient, null,
                                React.createElement(LogoArea, null,
                                    React.createElement(Logo, Object.assign({}, card.primaryLogo)),
                                    React.createElement(Logo, Object.assign({}, card.secondaryLogo))),
                                React.createElement(CardDescription, null, card.description),
                                React.createElement(Button, Object.assign({}, card.button)))))),
                    React.createElement(SelectorsFloater, null,
                        React.createElement(SelectorsNavigation, { id: "carousel-menu", "aria-label": labels.GO_TO },
                            React.createElement(SelectorsContainer, null, cards &&
                                cards.map((_card, i) => (React.createElement(SelectorWrapper, { key: `carousel-selector-${i}` },
                                    React.createElement("a", { "aria-labelledby": `carousel-menu ${carouselCardId(i)}`, href: `#${carouselCardId(i)}` },
                                        React.createElement(Selector, null)))))))))))));
}
export default memo(Carousel);
//# sourceMappingURL=carousel.js.map