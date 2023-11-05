import React, { useState } from "react";
import user from "../../images/user.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSilce";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeHomeLink = () => {
    navigate("/");
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(text);
    if (text === "") return alert("please enter search text");
    dispatch(fetchAsyncMovies(text));
    dispatch(fetchAsyncShows(text));
    setText("");
  };
  return (
    <>
      <div className="header w-[full] h-[4.2rem]  sticky top-[0] z-[1000] flex justify-between items-center bg-[#0f171e] ">
        <div
          className="logo text-[1.3rem] font-medium text-[#ffff] "
          onClick={changeHomeLink}
        >
          Movie App
        </div>

        <div className="user-image flex justify-start items-center gap-[1.6rem] ">
          <div className="search-bar  flex justify-center items-center">
            <form
              onSubmit={submitHandle}
              className="h-[4rem] p-[1rem] w-[15rem] text-[1.4rem] outline-none rounded-tl-[4px] rounded-bl-[4px] text-[black]"
            >
              <input
                type="text"
                placeholder="search....."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {/* <button
                type="submit"
                // className="bg-[white] h-[4rem] p-[1rem] w-[20rem] text-[1.4rem] outline-none rounded-tl-[4px] rounded-bl-[4px] text-[#ffff] "
              >
                <i className="fa fa-search"></i>
              </button> */}
            </form>
          </div>
          <img
            src={user}
            alt="user"
            className="h-[2.8rem] w-[2.8rem] flex justify-center items-center rounded-full text-[1.2rem] bg-blue-700 text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
