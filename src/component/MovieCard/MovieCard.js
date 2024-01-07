import React from "react";
import { Link, useNavigate } from "react-router-dom";
const MovieCard = (props) => {
  const navigate = useNavigate();

  const { data } = props;
  // console.log(data);

  const changeRoute = () => {
    navigate(`/Movie/${data.imdbID}`);
  };

  return (
    // <div className=" flex justify-center">/
    <div className="hover:scale-[1.1]  h-full  min-h-[20rem] m-2  p-[rem] transition-transform duration-500 bg-[#0f171e] cursor-pointer ">
      <Link to={`/Movie/${data.imdbID}`}>
        <div className="card-top h-[10rem] relative w-full flex justify-center">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-info text-[#ffff] p-[1rem] text-[1.4rem]">
          <h4 className="mb-[1rem] break-words">{data.Title}</h4>
          <p className="text-[1.2rem] mb-[1rem]">{data.Year}</p>
        </div>
      </Link>
    </div>
    // </div>
  );
};

export default MovieCard;
