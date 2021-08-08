//plustrandom / counter store 에서 couter 값을 가져와 random 값을 더한 후 저장

export function* plusRandom() {
  try {
    console.log("I cathced action!");
  } catch (error) {
    console.error(error);
  }
}

//plusafteroneseconds / 1초후 plusrandom 액션 발생

export function* plusAfterOneSeconds() {
  try {
    console.log("I cathced action!");
  } catch (error) {
    console.error(error);
  }
}
