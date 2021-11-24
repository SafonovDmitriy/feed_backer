import { call, put, select, takeLatest } from "redux-saga/effects";
import { FETCH_CITYES, SET_CITYES, SET_CITYES_LOADED } from "../actionTypes";
export const citySagaWorker = [takeLatest(FETCH_CITYES, fetchCityesSaga)];

export const fetchCityesAction = (payload) => ({
  type: FETCH_CITYES,
  payload,
});

export const setCityAction = () => ({
  type: SET_CITYES,
});

export const setLoadingFlagForCityAction = (payload) => ({
  type: SET_CITYES_LOADED,
  payload,
});

function* fetchCityesSaga(payload) {
  try {
    // const {
    //   data: { totalPage, users },
    // } = yield call(getAllUsersApi, { id:payload });
    // yield put(setUsersAction(users));
    // yield put(setUsersTotalPageAction(totalPage));
  } catch ({ data, status }) {
    // yield put(errorHandlerAction(status));
    // showErrorMessage(data?.message);
  } finally {
    // yield put(setUsersLoadedAction(true));
  }
}
