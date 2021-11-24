import { all } from "@redux-saga/core/effects";
import { citySagaWorker } from "./cityActions";
import { feedBackSagaWorker } from "./feedbackActions";
import { regionSagaWorker } from "./regionActions";

export function* rootSagaWatcher() {
  yield all([...citySagaWorker, ...feedBackSagaWorker, ...regionSagaWorker]);
}
