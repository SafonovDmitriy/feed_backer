import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  FETCH_FEEDBACK,
  SET_FEEDBACK,
  SET_FEEDBACK_LOADED,
} from "../actionTypes";
export const feedBackSagaWorker = [
  takeLatest(FETCH_FEEDBACK, fetchFeedBackSaga),
];

export const fetchFeedBackAction = () => ({
  type: FETCH_FEEDBACK,
});

export const setFeedBackAction = () => ({
  type: SET_FEEDBACK,
});

export const setLoadingFlagForFeedBackAction = (payload) => ({
  type: SET_FEEDBACK_LOADED,
  payload,
});

function* fetchFeedBackSaga() {
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
