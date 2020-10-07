import React from 'react'
//import PropTypes from 'prop-types'

function Counter(props: any): any {
    const { counterValueCallback } = props;
    console.log(counterValueCallback)
    return (
        <div>
            <button onClick={counterValueCallback}>Increase Counter From Child</button>
        </div>
    )
}

// Counter.propTypes = {
//     counterValueCallback: PropTypes.func.isRequired
// }

export default Counter





