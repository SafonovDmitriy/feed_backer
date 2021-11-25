import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCityApi } from "../../api/httpService";
import { FETCH_CITIES, SET_CITIES, SET_CITIES_LOADED } from "../actionTypes";
import { showErrorMessage } from "../../helpers/showNotificationMessage";

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
  } catch ({ data, status }) {
    yield showErrorMessage(data.error);
  }
}
