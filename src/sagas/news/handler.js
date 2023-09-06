import { call, put, select } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newsSlice";

export default function* handleGetNews({ payload, type }) {
  // console.log(payload);
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query); // giong useSelector (ktra xem trong inital state ==> query = payload)
    if (newsQuery === "") query = "react";
    else query = payload;

    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
