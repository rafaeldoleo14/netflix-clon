import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import "./main.css";
import { RowMovie } from "../RowMovie/RowMovie";
import requests from "../../../data/requests";
import { MovieCard } from "../MovieCard/MovieCard";

export const Main = ({ requests }) => {
  const [movies, setMovies] = useState([]);

  const movie = !!movies && movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={movie?.title}
        />

        <div className="main-content">
          <h1 className="text-3xl md:text-5xl font-bold">
            {movie?.title || movie?.name}
          </h1>

          <p className="text-gray-400 text-sm">
            Publicado: {movie?.release_date || movie?.first_air_date}
          </p>

          {movie?.overview?.length > 150 ? (
            <p
              style={{ fontSize: "1.2em" }}
              className="w-full  text-gray-200 text-justify s:max-w[25%] md:max-w-[35%] lg:max-w-[70%] xl:max-w-[35%]"
            >
              {movie?.overview?.substring(0, 150) + "..." ||
                "Overview not available"}
            </p>
          ) : (
            <p
              style={{ fontSize: "1.2em" }}
              className="w-full text-gray-200  md:max-w-[30%] lg:max-w-[70%] xl:max-w-[35%]"
            >
              {movie?.overview || "Overview not available"}
            </p>
          )}

          <div className="buttons-container">
            <button>
              <FaPlay size={25} />
              Reproducir
            </button>
            <button>
              <FiInfo size={30} />
              Más información
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
