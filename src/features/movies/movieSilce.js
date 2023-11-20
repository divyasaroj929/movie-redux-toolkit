import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  `movies/fetchAsyncMovies`,
  async (text) => {
    try {
      console.log(API_KEY, API_URL);
      // https://www.omdbapi.com/?i=tt0144701&apikey=3aef2d21&s=Harry&type=movie/// carrot api here
      const resp = await fetch(
        `${API_URL}?i=tt0144701&apiKey=3aef2d21&s=${text}&type=movie`,
        // `${API_URL}?i=tt0144701&apiKey=${API_KEY}&s=${text}&type=movie`,
        // `${API_URL}?i=tt0144701&apikey=3aef2d21&s=${text}&type=movie`,
        { method: "GET" }
      );

      const finalResult = await resp.json();
      console.log(resp);
      return finalResult;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  `movies/fetchAsyncShows`,
  async (text) => {
    try {
      console.log(API_KEY);
      const resp = await fetch(
        `${API_URL}?i=tt0144701&apikey=3aef2d21&s=${text}&type=series`,
        // `${API_URL}?i=tt0144701&apikey=${API_KEY}&s=${text}&type=series`,
        { method: "GET" }
      );
      const finalResult = await resp.json();
      console.log(resp);
      return finalResult;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  `movies/fetchAsyncMovieOrShowDetail`,
  async (id) => {
    try {
      const resp = await fetch(`${API_URL}?apikey=3aef2d21&i=${id}&plot=full`, {
        method: "GET",
      });
      const finalResult = await resp.json();
      // console.log(resp);
      return finalResult;
    } catch (err) {
      console.log("err", err);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  loading: Boolean,
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
    //   [fetchAsyncMovies.pending]: () => {
    //     // console.log("pending");
    //   },
    //   [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
    //     // console.log(" fetch data fulfill");
    //     return { ...state, movies: payload };
    //   },
    //   [fetchAsyncMovies.rejected]: (state, { payload }) => {
    //     // console.log("rejected");
    //   },
    //   [fetchAsyncShows.fulfilled]: (state, { payload }) => {
    //     // console.log(" fetch data fulfill");
    //     return { ...state, shows: payload };
    //   },
    //   [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //     // console.log(" fetch data fulfill");
    //     return { ...state, selectMovieOrShow: payload };
    //   },

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
