import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(middleware));

sagaMiddleware.run(rootSaga);

export default store;
