import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

//var properties = {message:'hello react', value: 20,  numbers:[1, 2, 3, 4]}
const Welcome = (properties) => {
    //const message = 'Hello React';
    return (
        // <Fragment>
        <>
            <span>
                Message: &nbsp;{properties.message}
            </span>
            <br />
            <span>
                Value:&nbsp;{properties.value}
            </span>
            <br />
            <span>
                1st Number:&nbsp;{properties.numbers[0]}
            </span>
        </>
        // </Fragment>
    );
}

Welcome.propTypes = {
    message: PropTypes.string.isRequired,
    value: PropTypes.number,
    numbers: PropTypes.array.isRequired
}

export default Welcome;