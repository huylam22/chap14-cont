import { all, fork } from "redux-saga/effects";
import { newsSaga } from "./news/saga";
export default function* rootSaga() {
  yield all([fork(newsSaga)]); // dung fork tai day vi no se ko block cac action khac (fork(newsSaga), fork(...))
}

// blocking vs non-blocking function
// blocking: call, put
// non-blocking: fork
// all, fork
// blocking: chờ đợi 1 hành động (function) chay xong mới thực hiện hành động tiếp theo (E.g: yield call(requestGetNews, payload))
// non-blocking: không chờ đợi hành động (function) chay xong mà thực hiện hành động tiếp theo (E.g: yield fork(newsSaga) se chay truoc khi ta set hits = [])
