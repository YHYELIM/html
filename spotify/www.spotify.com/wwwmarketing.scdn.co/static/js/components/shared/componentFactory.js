import React from 'react';
import BrowserSvelteWrapper from './BrowserSvelteWrapper';
import ServerSvelteWrapper from './ServerSvelteWrapper';

export default (BrowserComponent, name) => {
    // This code will be eliminated in bundlers if
    // process.browser is truthy. See the readme for
    // more information.
    if (!process.browser) {
        const {
            [name]: ServerComponent,
        } = require('@spotify-internal/masthead/ssr');

        return props => < ServerSvelteWrapper this = {
            ServerComponent
        } { ...props
        }
        />;
    }

    return props => < BrowserSvelteWrapper this = {
        BrowserComponent
    } { ...props
    }
    />;
};