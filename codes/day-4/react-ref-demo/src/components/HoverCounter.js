import React from 'react'

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

export default HoverCounter;

