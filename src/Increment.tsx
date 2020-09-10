import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "./store";

const incrementAction = () => ({type: "INCREMENT"});
const decrementAction = () => ({type: "DECREMENT"});
const incrementAsyncAction = () => ({type: "INCREMENT_ASYNC"});

const Increment = () => {
    const dispatch = useDispatch();
    const value = useSelector<State, number>(state => state.demo.value);
    const increment = () => dispatch(incrementAction());
    const decrement = () => dispatch(decrementAction());
    const incrementAsync = () => dispatch(incrementAsyncAction());
    return (
        <div>
            <div>
                Value: <b>{value}</b>
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementAsync}>add and remove after 2s</button>
        </div>
    );
};

export default Increment;
