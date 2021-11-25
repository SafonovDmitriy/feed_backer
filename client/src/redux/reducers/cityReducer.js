import { SET_CITIES, SET_CITIES_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  loaded: false,
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CITIES:
      return { ...state, data: payload };
    case SET_CITIES_LOADED:
      return { ...state, loaded: payload };

    default:
      return state;
  }
};
export default cityReducer;
