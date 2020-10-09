const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

//action types
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'

//action (action creator)
const increaseCounter = (incrementValue) => {
    return {
        type: INCREASE_COUNTER,
        payload: incrementValue
    }
}
const decreaseCounter = (decrementValue) => {
    return {
        type: DECREASE_COUNTER,
        payload: decrementValue
    }
}

//state
const initialCounterState = {
    counter: 0
}

//reducer
const counterReducer = (state = initialCounterState, { type, payload }) => {
    let newState = state;
    switch (type) {
        case INCREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter + payload
            }
            return newState;

        case DECREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter - payload
            }
            return newState;

        default:
            return newState;
    }
}

//store
const loggerMiddleware = createLogger();
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));

//fire requests against store (reducer)

//a. create action
const increaseByFiveAction = increaseCounter(5);
const decreaseByTwoAction = decreaseCounter(3);

console.log('initial state', store.getState())

//b. dispatch the action via dispatcher
store.dispatch(increaseByFiveAction)
store.dispatch(decreaseByTwoAction)




