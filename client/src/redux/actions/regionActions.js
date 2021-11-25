import { call, put, takeLatest } from "redux-saga/effects";
import { fetchRegionsApi } from "../../api/httpService";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import { FETCH_REGIONS, SET_REGIONS, SET_REGIONS_LOADED } from "../actionTypes";
export const regionSagaWorker = [takeLatest(FETCH_REGIONS, fetchFeedBackSaga)];

export const fetchRegionsAction = () => ({
  type: FETCH_REGIONS,
});

export const setRegionsAction = (payload) => ({
  type: SET_REGIONS,
  payload,
});

export const setLoadedFlagForRegionsAction = (payload) => ({
  type: SET_REGIONS_LOADED,
  payload,
});

function* fetchFeedBackSaga() {
  try {
    yield put(setLoadedFlagForRegionsAction(false));
    const {
      data: { data },
    } = yield call(fetchRegionsApi);
    yield put(setRegionsAction(data));
  } catch ({ data, status }) {
    showErrorMessage(data?.error);
  } finally {
    yield put(setLoadedFlagForRegionsAction(true));
  }
}
