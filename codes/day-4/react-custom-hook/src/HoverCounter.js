import React from 'react'
import useCounter from './useCounter'

export default function HoverCounter({ data }) {
    const [counter, increaseCounter] = useCounter(20);
    const divStyle = {
        bakckgroundColor: 'lime'
    }
    return (
        <div>
            <span>Data:&nbsp;{data}</span>
            <br />
            <span>Counter:&nbsp;{counter}</span>
            <br />
            <div style={divStyle} onMouseOver={increaseCounter}>Increase Counter By Hovering</div>
        </div>
    )
}

