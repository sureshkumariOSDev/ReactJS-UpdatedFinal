import React, { Component } from 'react'

function withErrorHandler(logErrorCallback, FallbackComponent, WrappedComponent) {
    class WithErrorHandler extends Component {
        state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
        static getDerivedStateFromError(error, info) {
            return {
                hasError: true, error: error, errorInfo: info
            }
        }
        componentDidCatch(error, info) {
            logErrorCallback(error, info)
                // .then((resp) => console.log(resp.json()))
                // .catch();
        }
        render() {
            if (this.state.hasError) {
                const { error, errorInfo } = this.state;
                return <FallbackComponent
                    {...this.props}
                    error={error}
                    errorInfo={errorInfo}
                />
            }

            return <WrappedComponent {...this.props} />
        }

    }
    return WithErrorHandler;
}

export default withErrorHandler;