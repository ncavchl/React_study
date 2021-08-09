import { takeEvery } from "@redux-saga/core/effects";

//saga
import * as CounterSaga from "./counter";

//reducer
import * as CounterActions from "../redux/counter";

export default function* rootSaga() {
  //root saga

  yield takeEvery(
    CounterActions.plusAfterOneSeconds,
    CounterSaga.plusAfterOneSeconds
  );
}
