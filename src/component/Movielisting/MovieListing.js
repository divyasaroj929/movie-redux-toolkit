import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/Settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSilce";
import MovieCard from "../MovieCard/MovieCard";
const MovieListing = () => {
  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // console.log(movies);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return (
          <>
            <MovieCard key={index} data={movie} />
          </>
        );
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => {
        return (
          <>
            <MovieCard key={index} data={shows} />
          </>
        );
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper p-[3rem]">
        <h2 className="text-[rgb(121,184,243)] mb-[1rem] text-[1.5rem]">
          Movies
        </h2>
        <Slider {...Settings}>{renderMovies}</Slider>
        <h2 className="text-[rgb(121,184,243)] mb-[1rem] text-[1.5rem]">
          Shows
        </h2>
        <Slider {...Settings}>{renderShows}</Slider>
      </div>
    </>
  );
};

export default MovieListing;
