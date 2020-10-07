import React, { useState } from 'react'

export default function Hero({ heroName }) {
    // const [hasError, setHasError] = useState(false);
    // try {
    //     if (heroName === 'Joker') {
    //         throw new Error('Not a hero');
    //     }
    // } catch (e) {
    //     setHasError(true);
    // }
    console.log('[Hero] renderded')
    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }
   
    return (
        <div>
            HeroName:{heroName}
        </div>
    )
}
