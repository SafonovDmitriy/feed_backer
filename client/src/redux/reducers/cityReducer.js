import { SET_CITYES, SET_CITYES_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  loaded: false,
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CITYES:
      return { ...state, data: payload };
    case SET_CITYES_LOADED:
      return { ...state, loaded: payload };

    default:
      return state;
  }
};
export default cityReducer;
