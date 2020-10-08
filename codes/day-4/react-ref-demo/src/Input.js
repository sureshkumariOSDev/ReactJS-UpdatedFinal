import React, { Component, createRef } from 'react'
import InputChild from './InputChild';

export default class Input extends Component {
    constructor() {
        super() //Component.call(this)
        this.inputRef = createRef();
        this.inputChildRef = createRef();
    }
    state = {
        data: null
    }
    changeValueHandler = (e) => {
        const newData = e.target.value;
        this.setState({
            data: newData
        })
    }
    showValue = () => {
        window.alert(this.inputRef.current.value);
    }
    componentDidMount() {
        //this.inputRef.current.focus();
        // const refToCholdInputElement = this.inputChildRef.current.focusInput();
        // refToCholdInputElement.focus();
        //this.inputChildRef.current.focusInput()
        this.inputChildRef.current.focus();
    }
    render() {
        return (
            <div>
                Parent:&nbsp;<input type='text' ref={this.inputRef} value={this.state.data} onChange={this.changeValueHandler} />
                <br />
                <button onClick={this.showValue}>Show Value</button>
                <br />
                <InputChild
                    ref={this.inputChildRef}
                    value={this.state.data}
                    change={this.changeValueHandler} />
            </div>
        )
    }
}
