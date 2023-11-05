import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSilce";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
export default store;
