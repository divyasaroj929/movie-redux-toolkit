import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSilce";
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="movie-section flex justify-evenly p-[2rem]  text-[#fffff]-400">
        {Object.keys(data).length === 0 ? (
          <div>...loading</div>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title text-[30rem]-[#ffff]">
                {data.Title}
              </div>
              <div
                className="movie-rating"
                style={{
                  paddingLeft: "3px",
                  marginTop: "20px",
                  color: "#79b8f3",
                  display: "flex",
                }}
              >
                <span style={{ marginRight: "20px" }}>
                  IMOB Rating
                  <i
                    className="fa fa-star"
                    style={{
                      color: "#ff9e00",
                    }}
                  ></i>
                  :{data.imdbRating}
                </span>
                <span style={{ marginRight: "20px" }}>
                  IMOB Votes{" "}
                  <i
                    className="fa fa-thumbs-up"
                    style={{
                      color: "#fafafa",
                    }}
                  ></i>
                  :{data.imdbVotes}
                </span>
                <span style={{ marginRight: "20px" }}>
                  Runtime
                  <i
                    className="fa fa-film"
                    style={{ color: "rgb(191,213,214)" }}
                  ></i>
                  :{data.Runtime}
                </span>
                <span style={{ marginRight: "20px" }}>
                  Year
                  <i
                    className="fa fa-calender"
                    style={{
                      color: "#peachpuff",
                    }}
                  ></i>
                  :{data.Year}
                </span>
              </div>
              <div
                className="movie-plot"
                style={{ marginTop: "20px", lineHeight: "1.8rem" }}
              >
                {data.Plot}
              </div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span className="pt-[1rem] text-[#ffff] text-600 w-[6rem] inline-block">
                    Stars
                  </span>
                  <span className="text-[#79b8f3]">{data.Actors}</span>
                </div>
                <div>
                  <span className="pt-[1rem] text-[#ffff] text-600 w-[6rem] inline-block">
                    Generes
                  </span>
                  <span className="text-[#79b8f3]">{data.Genre}</span>
                </div>
                <div>
                  <span className="pt-[1rem] text-[#ffff] text-600 w-[6rem] inline-block">
                    Languages
                  </span>
                  <span style={{ color: "#79b8f3" }}>{data.Language}</span>
                </div>
                <div>
                  <span className="pt-[1rem] text-[#ffff] text-600 w-[6rem] inline-block">
                    Awards
                  </span>
                  <span className="text-[#79b8f3]">{data.Awards}</span>
                </div>
              </div>
              <div className="section-right w-[40rem] ml-[6rem]">
                <img src={data.Poster} alt={data.title} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
