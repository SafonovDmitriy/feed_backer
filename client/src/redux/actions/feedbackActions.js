import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  deleteFeedbackApi,
  fetchFeedbackApi,
  postFeedbackApi,
  putFeedbackApi,
} from "../../api/httpService";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../helpers/showNotificationMessage";
import {
  DELETE_FEEDBACK,
  FETCH_FEEDBACK,
  POST_FEEDBACK,
  PUT_FEEDBACK,
  SET_FEEDBACK,
  SET_FEEDBACK_LOADED,
} from "../actionTypes";
import { feedbacksSelector } from "../selectors";

export const feedBackSagaWorker = [
  takeLatest(FETCH_FEEDBACK, fetchFeedBackSaga),
  takeLatest(POST_FEEDBACK, postFeedBackSaga),
  takeLatest(PUT_FEEDBACK, putFeedBackSaga),
  takeLatest(DELETE_FEEDBACK, deleteFeedBackSaga),
];

export const fetchFeedBackAction = () => ({
  type: FETCH_FEEDBACK,
});

export const postFeedBackAction = (payload) => ({
  type: POST_FEEDBACK,
  payload,
});
export const putFeedBackAction = (payload) => ({
  type: PUT_FEEDBACK,
  payload,
});
export const deleteFeedBackAction = (payload) => ({
  type: DELETE_FEEDBACK,
  payload,
});

export const setFeedBackAction = (payload) => ({
  type: SET_FEEDBACK,
  payload,
});

export const setLoadedFlagForFeedBackAction = (payload) => ({
  type: SET_FEEDBACK_LOADED,
  payload,
});

function* fetchFeedBackSaga() {
  try {
    yield put(setLoadedFlagForFeedBackAction(false));
    const {
      data: { data },
    } = yield call(fetchFeedbackApi);
    yield put(setFeedBackAction(data));
  } catch ({ data, status }) {
    showErrorMessage(data?.error);
  } finally {
    yield put(setLoadedFlagForFeedBackAction(true));
  }
}
function* postFeedBackSaga({ payload }) {
  try {
    yield call(postFeedbackApi, payload);
    yield put(fetchFeedBackAction());
    yield showSuccessMessage("Комментарий добавлен");
  } catch ({ data, status }) {
    showErrorMessage(data?.error);
  }
}
function* putFeedBackSaga({ payload }) {
  try {
    yield call(putFeedbackApi, payload);
    yield put(fetchFeedBackAction());
    yield showSuccessMessage("Комментарий обновлен");
  } catch ({ data, status }) {
    showErrorMessage(data?.error);
  }
}
function* deleteFeedBackSaga({ payload }) {
  try {
    const feedBackList = yield select(feedbacksSelector);
    yield call(deleteFeedbackApi, payload);
    yield put(
      setFeedBackAction(
        feedBackList.filter((feedBack) => feedBack.feedback_id !== payload)
      )
    );
    yield showSuccessMessage("Комментарий удален");
  } catch ({ data, status }) {
    showErrorMessage(data?.error);
  }
}
