import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../../data/requests";
import { Rows } from "../Rows/Rows";

export const Main = ({ requests }) => {
  const [movies, setMovies] = useState();

  const movie = !!movies && movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="w-full text-white">
        <div className="w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie?.backdrop_path || movie?.poster_path
            }`}
            className="w-full h-full object-cover"
            alt={movie?.title}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            className="absolute w-full top-[20%] p-8 md:p-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              {movie?.title || movie?.name}
            </h1>

            <p className="text-gray-400 text-sm">
              Publicado: {movie?.release_date || movie?.first_air_date}
            </p>

            {movie?.overview?.length > 150 ? (
              <p
                style={{ fontSize: "1.2em" }}
                className="w-full  text-gray-200 text-justify md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]"
              >
                {movie?.overview?.substring(0, 150) + "..." ||
                  "Overview not available"}
              </p>
            ) : (
              <p
                style={{ fontSize: "1.2em" }}
                className="w-full text-gray-200  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]"
              >
                {movie?.overview || "Overview not available"}
              </p>
            )}

            <div style={{ marginBottom: "10em" }} className="my-4 flex gap-3">
              <button className="bg-white text-black py-2 px-5">
                Reproducir
              </button>
              <button className=" text-white border border-gray-300 py-2 px-5">
                Ver luego
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
