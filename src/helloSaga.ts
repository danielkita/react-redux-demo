import { takeLatest, takeEvery, all, put, delay } from 'redux-saga/effects'

const incrementAction = () => {
    console.log('example console log');
};

const decrementAction = () => {
    console.log('decrement console log');
};

const incrementAsyncAction = function*() {
    yield put({type: "INCREMENT"});
    yield delay(2000);
    yield put({type: "DECREMENT"});
}

export default function* helloSaga() {
    yield all([
        takeLatest("INCREMENT", incrementAction),
        takeEvery("DECREMENT", decrementAction),
        takeEvery("INCREMENT_ASYNC", incrementAsyncAction)
    ])
}
