import React, { Component, createRef } from 'react'
/*
export default class InputChild extends Component {
    constructor() {
        super();
        this.inputElementRef = createRef();
    }

    focusInput = () => {
        // return this.inputElementRef.current;
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <div>
                Child:&nbsp;
                <input
                    type='text'
                    value={this.props.value}
                    onChange={this.props.change}
                    ref={this.inputElementRef}
                />
            </div>
        )
    }
}
*/


/*export default function InputChild(props) {
    return (
        <div>
            Child:&nbsp;
            <input
                type='text'
                value={props.value}
                onChange={props.change}
            />
        </div>
    ) 
}
*/
let InputChild = (props, ref) => {
    return (
        <div>
            Child:&nbsp;
            <input
                type='text'
                value={props.value}
                onChange={props.change}
                ref={ref}
            />
        </div>
    )
}
InputChild = React.forwardRef(InputChild);
export default InputChild;
