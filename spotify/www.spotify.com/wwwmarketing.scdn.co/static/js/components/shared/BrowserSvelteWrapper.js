import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

class BrowserSvelteWrapper extends Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
    }

    componentDidMount() {
        const {
            this: Constructor,
            ...props
        } = this.props;

        this.instance = new Constructor({
            target: this.container.current,
            hydrate: true,
            props,
        });
    }

    componentDidUpdate() {
        const {
            this: _,
            ...props
        } = this.props;

        this.instance.$set(props);
    }

    componentWillUnmount() {
        this.instance.$destroy();
    }

    render() {
        return ( <
            div ref = {
                this.container
            }
            dangerouslySetInnerHTML = {
                {
                    __html: ''
                }
            }
            suppressHydrationWarning /
            >
        );
    }
}

BrowserSvelteWrapper.propTypes = {
    this: PropTypes.func.isRequired,
};

export default BrowserSvelteWrapper;