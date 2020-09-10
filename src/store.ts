import {AnyAction, combineReducers, createStore, Reducer, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import helloSaga from './helloSaga'

type ExampleState = {
    value: number
}

const sagaMiddleware = createSagaMiddleware()

const exampleReducer: Reducer<ExampleState> = (state = {
    value: 0
}, action: AnyAction) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            };
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};

const reducers = combineReducers({
    demo: exampleReducer
})

export type State = ReturnType<typeof reducers>;
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga)
