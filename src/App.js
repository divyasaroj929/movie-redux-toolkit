import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import MovieDetail from "./component/movieDetail/MovieDetail";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import { APIKey } from "./common/api/MovieApiKey";
import movieApi from "./common/api/movieApi";

import "./App.css";

function App() {
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const response = await movieApi
  //       .get(`?apikey=${APIKey}&i=${`tt0144701`}&plot=full`)
  //       .catch((err) => {
  //         console.log(err, "err");
  //       });
  //     console.log(response, "appresponce");
  //   };
  //   fetchMovie();
  // }, []);
  return (
    <>
      <div className="overflow-y-auto ">
        <Header />
        <div className="no-scrollbar">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
