import { getOrCreateDataLayer } from '../dataLayer';
export const setupGtmFlavourPageTracking = (element) => {
    const dataLayer = getOrCreateDataLayer();
    const singleCardList = element.querySelectorAll('[id*="single-card"]');
    singleCardList.forEach(singleCard => {
        if (singleCard.getElementsByTagName('a')[0]) {
            singleCard.getElementsByTagName('a')[0].addEventListener('click', () => {
                dataLayer.push({
                    event: 'gtm.event',
                    eventAction: 'Click',
                    eventCategory: 'CheckoutInteraction',
                    eventLabel: 'Change Plans',
                });
            });
        }
        if (singleCard.getElementsByTagName('a')[1]) {
            singleCard.getElementsByTagName('a')[1].addEventListener('click', () => {
                dataLayer.push({
                    event: 'gtm.event',
                    eventAction: 'Click',
                    eventCategory: 'CheckoutInteraction',
                    eventLabel: 'T&C',
                });
            });
        }
    });
    const collapsablePlansList = element.querySelectorAll('[id*="collapsable-plans"]');
    collapsablePlansList.forEach(collapsablePlan => {
        const plans = collapsablePlan.getElementsByTagName('details');
        for (const plan of plans) {
            plan.addEventListener('click', () => {
                const eventLabel = plan.getAttribute('data-event-label');
                const eventAction = plan.hasAttribute('open')
                    ? 'Accordion Close'
                    : 'Accordion Open';
                dataLayer.push({
                    event: 'gtm.event',
                    eventAction: eventAction,
                    eventCategory: 'Interaction',
                    eventLabel: eventLabel,
                });
            });
        }
        const paymentList = collapsablePlan.getElementsByTagName('a');
        for (const payment of paymentList) {
            payment.addEventListener('click', evt => {
                evt.stopPropagation();
                const eventLabel = payment.getAttribute('data-event-label');
                dataLayer.push({
                    event: 'gtm.event',
                    eventAction: 'Payment Option',
                    eventCategory: 'Interaction',
                    eventLabel: eventLabel,
                });
            });
        }
    });
};
//# sourceMappingURL=setupFlavourPageTracking.js.map