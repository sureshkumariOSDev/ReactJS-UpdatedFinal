import React, { Component } from 'react'

function ClickCounter({ value, counterValue, increaseCounterValue }) {

    return (
        <div>
            <span>Value:&nbsp;{value}</span>
            <br/>
            <span>Counter:&nbsp;{counterValue}</span>
            <br />
            <button onClick={increaseCounterValue}>Increase Counter By Clicking</button>
        </div>
    )
}
export default ClickCounter;


