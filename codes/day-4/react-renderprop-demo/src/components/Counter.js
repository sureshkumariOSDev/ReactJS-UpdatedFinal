import React, { Component, useState } from 'react'
/*
export default class Counter extends Component {
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
        return (
            <div>
                {this.props.render(this.state.counter, this.increaseCounter)}
            </div>
        )
    }
}
*/
export default function Counter({ render }) {
    const [counterState, setCounterState] = useState(0);
    const increaseCounter = () => {
        setCounterState(ps => {
            return ps + 1;
        });
    }

    return (
        <div>
            {render(counterState, increaseCounter)}
        </div>
    )
}
