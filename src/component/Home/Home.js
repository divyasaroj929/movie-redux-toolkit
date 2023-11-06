import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSilce";
import MovieListing from "../Movielisting/MovieListing";
import { APIKey } from "../../common/api/MovieApiKey";
import movieApi from "../../common/api/movieApi";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));

    // const fetchMovie = async () => {
    //   const response = await movieApi
    //     .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    //     .catch((err) => {
    //       console.log(err, "err");
    //     });
    //   dispatch(addMovies(response.data));
    // console.log(response, "the response from API");
    // };
    // fetchMovie();
  }, [dispatch]);
  return (
    <>
      <div>
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
