import React from 'react';
import PropTypes from 'prop-types';

const ServerSvelteWrapper = ({
    this: Component,
    ...props
}) => {
    const {
        html: __html
    } = Component.render(props);

    return <div dangerouslySetInnerHTML = {
        {
            __html
        }
    }
    />;
};

ServerSvelteWrapper.propTypes = {
    this: PropTypes.shape({
        render: PropTypes.func.isRequired,
    }).isRequired,
};

export default ServerSvelteWrapper;