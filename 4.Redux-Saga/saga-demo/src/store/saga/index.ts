import { takeEvery, all, fork } from "redux-saga/effects";

// Saga
import * as CounterSaga from "./counter";

// Reducer
import * as CounterActions from "../redux/counter";

export default function* rootSaga() {
  // Root Saga
  yield all([fork(handleCounter)]);
}

function* handleCounter() {
  yield takeEvery(
    CounterActions.plusAfterOneSeconds,
    CounterSaga.plusAfterOneSeconds
  );
  yield takeEvery(CounterActions.plusRandom, CounterSaga.plusRandom);
}

//처리해야할 saga들이 많아질 경우 rootsage에 전부 관리하기 불편하므로 각 reducer마다 핸들링하는 함수를 만ㄷ르어
// root에서 불러오는 것이 관리하기 편함
