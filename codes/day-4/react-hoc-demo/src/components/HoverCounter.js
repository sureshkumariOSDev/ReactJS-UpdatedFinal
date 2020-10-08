import React, { Component } from 'react'
import withCounter from './withCounter'

function HoverCounter({ data, counter, increaseCounter }) {

    const divStyle = {
        bakckgroundColor: 'lime'
    }
    return (
        <div>
            <span>Data:&nbsp;{data}</span>
            <br/>
            <span>Counter:&nbsp;{counter}</span>
            <br />
            <div style={divStyle} onMouseOver={increaseCounter}>Increase Counter By Hovering</div>
        </div>
    )
}

//const HoverWithCounter = withCounter(HoverCounter);
//export default HoverWithCounter;
export default withCounter(HoverCounter);

