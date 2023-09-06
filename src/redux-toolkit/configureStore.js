import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

// My custom middleware to logger store state
const loggerMiddleware = (store) => (next) => (action) => {
  // console.log(action);
  // action.payload = 10; co the sua va no se de len dispatch
  // delete action.payload; co the xoa va no se khong dispatch
  next(action); // de chay toi cai tiep theo (giong nodejs)
};

// same as above
// const loggerMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
// your code here
//      };
//   };
// };

// redux-logger middleware pho bien hien nay

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// store.subscribe(() => {
//   // javascript observer pattern
//   console.log(`current state: ${store.getState().counter.count}`);
// });

// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));
// sagaMiddleware.run(rootSaga);
export default store;
