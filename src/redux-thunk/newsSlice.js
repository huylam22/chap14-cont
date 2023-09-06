import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import requestGetNews from "./requests";
import { handleFetchNews } from "./handler";

export const setLoading = createAction("setLoading");

// export const handleFetchNews = createAsyncThunk(
//   "news/handleFetchNews",
//   async (query, thunkApi) => {
//     console.log(query);
//     console.log(thunkApi);
//     const response = await requestGetNews(query);
//     return response.data.hits;
//   }
// );
// createAsyncThunk tra ve promise ==> fullfilled || pending || rejected
const initialState = { hits: [], loading: true, errorMessage: "", query: "" };
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});

export default newsSlice.reducer;

// redux-thunk
