import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  // middleware: (gDM) => gDM().concat(logger, sagaMiddleware), // logger === in ra console actions
  middleware: (gDM) => gDM().concat(logger), // redux thunk
});

// sagaMiddleware.run(rootSaga);
export default store;
