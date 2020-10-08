import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

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
                <ClickCounter
                    counter={this.state.counter}
                    increaseCounter={this.increaseCounter} />
                <HoverCounter
                    counter={this.state.counter}
                    increaseCounter={this.increaseCounter} />
            </div>
        )
    }
}
