var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
import { AlbumArt, Benefits, Comparisons, Checklist, Faq, Hero, Hero2020, LogoHero, Plans, Shelf, Kids, ListenTogether, ProductDescription, PartnerBenefits, PartnerDescriptions, SingleCard, Storefront, ProductDemo, ContentBox, VideoList, Upsell, CollapsablePlans, } from '../../index';
import ComponentConfiguration from '../../configuration';
import ErrorBoundary from './error-boundary';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
const COMPONENT_MAP = {
    ALBUM_ART: AlbumArt,
    BENEFITS: Benefits,
    COMPARISONS: Comparisons,
    CHECKLIST: Checklist,
    FAQ: Faq,
    HERO: Hero,
    LOGO_HERO: LogoHero,
    HERO2020: Hero2020,
    PLANS: Plans,
    SHELF: Shelf,
    LISTEN_TOGETHER: ListenTogether,
    KIDS: Kids,
    PRODUCT_DESCRIPTION: ProductDescription,
    PARTNER_BENEFITS: PartnerBenefits,
    PARTNER_DESCRIPTIONS: PartnerDescriptions,
    SINGLE_CARD: SingleCard,
    STOREFRONT: Storefront,
    PRODUCT_DEMO: ProductDemo,
    CONTENT_BOX: ContentBox,
    VIDEO_LIST: VideoList,
    COLLAPSABLE_PLANS: CollapsablePlans,
    UPSELL: Upsell,
};
const validComponent = (component) => {
    return component in COMPONENT_MAP;
};
export function Page({ data, textDirection = 'ltr', eventParams, market = null, device, }) {
    if (!data) {
        return null;
    }
    const PageContainer = styled.main `
    > section:first-child {
      article:first-child {
        padding-top: 80px;
      }
    }
  `;
    return (React.createElement(ComponentConfiguration, { direction: textDirection, market: market, device: device },
        React.createElement(PageContainer, Object.assign({}, eventParamAttributes(eventParams)), data.map((_a, i) => {
            var { __typename, container } = _a, rest = __rest(_a, ["__typename", "container"]);
            const componentType = __typename.toUpperCase();
            if (!validComponent(componentType)) {
                return null;
            }
            const Component = COMPONENT_MAP[componentType];
            return (React.createElement(ErrorBoundary, { key: `${__typename}-${i}`, typename: __typename },
                React.createElement(Component, Object.assign({}, rest, { container: Object.assign({ id: `${__typename}-${i}` }, container), eventParams: {
                        componentName: __typename,
                        componentPosition: i,
                    } }))));
        }))));
}
export default Page;
//# sourceMappingURL=page.js.map