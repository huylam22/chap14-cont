import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNews from "./handler";

export function* newsSaga() {
  // takelastest la lay cai cuoi cung (vdu save 10 lan thi se save 1 lan cuoi cung)
  // takeevery la lay moi cai (vdu save 10 lan thi se save 10 lan luon) ==> CMS Wordpress hay word (update) dung cai nay
  // yield takeLastest({type: 'USER_FETCH_SUCCEEDED',  worker Saga}) same as below
  yield takeLatest(getNews.type, handleGetNews); // catch cai action getNews.type == "news/getNews" || sau do goi handler == handleGetNews (try catch)
}

/** Hiểu rõ hoạt động của redux-saga:
 * -> Redux action dispatched from component(getNews)
 * -> Watcher Saga catches the action -> Handler call a function to make the request(handleGetNews)
 * -> Call requestGetNews
 * -> setNews
 * -> Update component
 * **/
