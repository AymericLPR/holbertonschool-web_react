import React from 'react';

const WithLogging = (WrappedComponent) => {
    const wrappedComponent = WrappedComponent.displayName || WrappedComponent.name || Component;

    class WithLoggingComponent extends React.Component {
        componentDidMount() {
            console.log(`Component ${wrappedComponent} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${wrappedComponent} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${wrappedComponent})`;

    return WithLoggingComponent;
};

export default WithLogging;
