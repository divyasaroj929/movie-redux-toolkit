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
    <div className=" flex justify-center">
      <div className="hover:scale-[1.1]  h-full w-[9rem] min-h-[20rem] m-[2rem] transition-transform duration-500 bg-[#0f171e] cursor-pointer ">
        <Link to={`/Movie/${data.imdbID}`}>
          <div className="card-top h-[10rem] relative w-full  ">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-info text-[#ffff] mt-[1rem] p-[1rem] text-[.8rem]">
            <h4 className="mb-[.5rem] break-words pt-[20px]">{data.Title}</h4>
            <p className="text-[1rem] mb-[0.5rem]">{data.Year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
