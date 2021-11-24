import { SET_FEEDBACK, SET_FEEDBACK_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  loaded: false,
};

const feedbackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FEEDBACK:
      return { ...state, data: payload };
    case SET_FEEDBACK_LOADED:
      return { ...state, loaded: payload };

    default:
      return state;
  }
};
export default feedbackReducer;
