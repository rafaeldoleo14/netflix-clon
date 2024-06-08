import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgFound from "../../../assets/img/imgFound.jpg";
import "./movieCard.css";

export const MovieCard = ({ info }) => {
  const navigate = useNavigate();

  const [onHover, setOnHover] = useState(false);

  const onMouseAction = (value) => {
    setOnHover(value);
  };

  return (
    <>
      <div
        style={{
          height: "400px",
          minWidth: "280px",
        }}
        className={`card `}
        onClick={() => navigate(`/movie/${info?.title || info?.name}`)}
        onMouseEnter={() => onMouseAction(true)}
        onMouseLeave={() => onMouseAction(false)}
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
      </div>
    </>
  );
};

// hover:bg-black/80 opacity-0
