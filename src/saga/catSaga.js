/** @format */

import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "../states/catState";

function* workGetcatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const slicedCats = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(slicedCats))
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetcatsFetch);
}
export default catSaga;