import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchCityApi } from "../../api/httpService";
import { FETCH_CITIES, SET_CITIES, SET_CITIES_LOADED } from "../actionTypes";
export const citySagaWorker = [takeLatest(FETCH_CITIES, fetchCitiesSaga)];

export const fetchCitiesAction = (payload) => ({
  type: FETCH_CITIES,
  payload,
});

export const setCityAction = (payload) => ({
  type: SET_CITIES,
  payload,
});

export const setLoadingFlagForCityAction = (payload) => ({
  type: SET_CITIES_LOADED,
  payload,
});

function* fetchCitiesSaga({ payload }) {
  try {
    const {
      data: { data },
    } = yield call(fetchCityApi, { idRegion: payload });

    yield put(setCityAction(data));
    // yield put(setUsersTotalPageAction(totalPage));
  } catch ({ data, status }) {
    // yield put(errorHandlerAction(status));
    // showErrorMessage(data?.message);
  } finally {
    // yield put(setUsersLoadedAction(true));
  }
}
