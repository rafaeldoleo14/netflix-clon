import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { useSlideRow } from "../../hooks/useSlideRow";
import "aos/dist/aos.css";
import AOS from "aos";
import "./rowMovie.css";

export const RowMovie = ({ title, request, id }) => {
  const [movies, setMovies] = useState([]);
  const { slideLeft, slideRigth } = useSlideRow(id);

  useEffect(() => {
    axios.get(request).then((response) => {
      setMovies(response.data.results);
    });
  }, [request]);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up-right">
        <h2 className="text-white font-bold p-8 md:p-10 md:text-xl">{title}</h2>
        <div className="row-container">
          {movies?.map((info) => (
            <MovieCard key={info.id} id={id} info={info} />
          ))}
        </div>
      </div>
    </>
  );
};
