import React from 'react'
import useCounter from './useCounter'

export default function ClickCounter({ value }) {
    const [counterValue, increaseCounterValue] = useCounter(10);
    return (
        <div>
            <span>Value:&nbsp;{value}</span>
            <br />
            <span>Counter:&nbsp;{counterValue}</span>
            <br />
            <button onClick={increaseCounterValue}>Increase Counter By Clicking</button>
        </div>
    )
}

