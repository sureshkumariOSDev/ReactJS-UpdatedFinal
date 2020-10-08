import * as React from 'react'

const withCounter = (WrappedComponent) => {
    
    class WithCounter extends React.Component {
        state = {
            counter: 0
        }
        increaseCounter = () => {
            this.setState(ps => {
                return {
                    counter: ps.counter + 1
                }
            });
        }
        render() {
            return <WrappedComponent
                increaseCounter={this.increaseCounter}
                counter={this.state.counter}
                {...this.props} />
        }
    }
    return WithCounter;
}

export default withCounter;