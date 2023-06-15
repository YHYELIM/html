import { Component } from 'react';
class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    componentDidCatch(error, info) {
        const { typename } = this.props;
        console.log(`[ERROR RENDERING ${typename} COMPONENT]`, error, info);
    }
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return null;
        }
        return children;
    }
}
export default ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map