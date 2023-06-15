import React from 'react';
import { PaymentMethodWrapper, PaymentMethod } from './components';
function PaymentMethods({ data }) {
    return (React.createElement(React.Fragment, null, data &&
        data.map((src, paymentMethodKey) => (React.createElement(PaymentMethodWrapper, { key: paymentMethodKey },
            React.createElement(PaymentMethod, { src: src, key: `plan__payment-method-${paymentMethodKey}`, alt: "payment method" }))))));
}
export default PaymentMethods;
//# sourceMappingURL=payment-methods.js.map