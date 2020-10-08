import { useState } from 'react'

export default function useCounter(initialState) {
    const [counterState, setCounterState] = useState(initialState);

    const increaseCounter = () => {
        setCounterState(ps => ps + 1);
    }

    return [counterState, increaseCounter];
}
