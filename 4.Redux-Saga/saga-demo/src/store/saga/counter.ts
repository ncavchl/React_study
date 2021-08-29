import { put, delay } from "redux-saga/effects";
import Counter from "../../components/Counter";
import * as CounterActions from "../redux/counter";

//plustrandom / counter store 에서 couter 값을 가져와 random 값을 더한 후 저장

/**
 * plusRandom
 * Counter Store에서 counter 값을 가져와 random 값을 더한 후 저장
 */

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min); //올림
  max = Math.floor(max); // 작거나 가장큰
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function* plusRandom() {
  try {
    const num = getRandomInt(1, 20);
    yield put(CounterActions.plus({ num }));
    console.log("I catched action!");
  } catch (error) {
    console.error(error);
  }
}

/**
 * plusAfterOneSeconds
 * 1초 후 plusRandom 액션 발행
 */

export function* plusAfterOneSeconds() {
  try {
    yield delay(1000);
    yield put(CounterActions.plusRandom());
    console.log("I catched action!222");
  } catch (error) {
    console.error(error);
  }
}
