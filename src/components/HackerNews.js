// npm install axios
// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNews, otherAction, setQuery } from "../sagas/news/newsSlice";
import { debounce } from "lodash";
import { setLoading } from "../redux-thunk/newsSlice";
import { handleFetchNews } from "../redux-thunk/handler";

const HackerNews = () => {
  const { hits, loading, errorMessage, query } = useSelector(
    (state) => state.news
  );

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews(query));
  // }, [dispatch, query]);

  // redux thunk
  useEffect(() => {
    dispatch(handleFetchNews("css"));
    // dispatch({ type: "news/handleFetchNews/fullfilled", payload: query });
    // dispatch({ type: "news/handleFetchNews/pending", payload: query });
    // dispatch({ type: "news/handleFetchNews/rejected", payload: query });
  }, [dispatch, query]);

  // takeLastest se lay 20 cai response cuoi cung trong khi takeEvery se lay tat ca cac response
  // useEffect(() => {
  //   dispatch(getNews(query));
  // }, [dispatch, query]);

  const handleChangeQuery = debounce((e) => {
    // dispatch(setQuery(e.target.value));    redux saga
  }, 250);

  // console.log(hits);

  const handleSetLoading = () => {
    // dispatch(otherAction(true));        redux saga
    dispatch(setLoading(true)); // redux-thunk
  };
  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleChangeQuery}
        />
        <button
          onClick={handleSetLoading}
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
        >
          Set Loading Extra Reducer
        </button>
      </div>
      {loading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="my-5 text-red-400">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
