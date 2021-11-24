import { SET_REGIONS, SET_REGIONS_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  loaded: false,
};

const regionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGIONS:
      return { ...state, data: payload };
    case SET_REGIONS_LOADED:
      return { ...state, loaded: payload };

    default:
      return state;
  }
};
export default regionReducer;
