import React from 'react'
import withErrorHandler from './witErrorHandler';
import logError from './errorService'
import FallbackView from './FallbackView';

function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }
    //useState();
    const validate = () => {
        
    }
    return (
        <div>
            <input type='text' value={heroName} />
        </div>
    )
}
export default withErrorHandler(logError, FallbackView, Hero);
