import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/api/MovieApiKey";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  `movies/fetchAsyncMovies`,
  async (text) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${text}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  `movies/fetchAsyncShows`,
  async (text) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${text}&type=series`
    );
    // console.log(response, " showresponce");

    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  `movies/fetchAsyncMovieOrShowDetail`,
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
    console.log(response, " showresponce");

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    // [fetchAsyncMovies.pending]: () => {
    //   // console.log("pending");
    // },
    // [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
    //   // console.log(" fetch data fulfill");
    //   return { ...state, movies: payload };
    // },
    // [fetchAsyncMovies.rejected]: (state, { payload }) => {
    //   // console.log("rejected");
    // },
    // [fetchAsyncShows.fulfilled]: (state, { payload }) => {
    //   // console.log(" fetch data fulfill");
    //   return { ...state, shows: payload };
    // },
    // [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //   // console.log(" fetch data fulfill");
    //   return { ...state, selectMovieOrShow: payload };
    // },

    builder.addCase(fetchAsyncMovies.pending, (state) => {
      return { ...state, loading: true };
    });

    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      return { ...state, movies: action?.payload, loading: false };
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      return { ...state, loading: false, shows: action?.payload };
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
      return { ...state, selectMovieOrShow: action?.payload, loading: false };
    });
  },
});

export const { addMovies } = MovieSlice.actions;

export const { removeSelectedMovieOrShow } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;

export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default MovieSlice.reducer;
