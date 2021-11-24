import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchRegionsApi } from "../../api/httpService";
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
    // yield put(setUsersTotalPageAction(totalPage));
  } catch ({ data, status }) {
    // yield put(errorHandlerAction(status));
    // showErrorMessage(data?.message);
  } finally {
    yield put(setLoadedFlagForRegionsAction(true));
  }
}
