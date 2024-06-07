import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imgFound from "../../../assets/img/imgFound.jpg";
import "./movieCard.css";

export const MovieCard = ({ info }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          height: "400px",
        }}
        onClick={() => navigate(`/movie/${info?.title || info?.name}`)}
        className="w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2 card"
      >
        <img
          className="w-full h-full block"
          src={`${
            info.poster_path
              ? `https://image.tmdb.org/t/p/original${info?.poster_path}`
              : `${imgFound}`
          } `}
          alt={info?.title}
        />

        <div className="absolute top-0 left-0 w-full h-full opacity-0  hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {info?.title || info?.name}
          </p>
        </div>
      </div>
    </>
  );
};

// hover:bg-black/80 opacity-0
