import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSagaWatcher } from "./actions";
import cityReducer from "./reducers/cityReducer";
import feedbackReducer from "./reducers/feedbackReducer";
import regionReducer from "./reducers/regionReducer";

const saga = createSagaMiddleware({
  onError: () => {
    saga.run(rootSagaWatcher);
  },
});
const reducers = combineReducers({
  region: regionReducer,
  city: cityReducer,
  feedback: feedbackReducer,
});

const store = createStore(
  reducers,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(saga)
    : composeWithDevTools(applyMiddleware(saga))
);
saga.run(rootSagaWatcher);
export default store;
