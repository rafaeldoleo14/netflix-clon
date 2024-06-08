import React from "react";
import requests from "../../data/requests";
import { ModalMovies } from "../components/ModalMovies/ModalMovies";
import { RowMovie } from "../components/RowMovie/RowMovie";
import { Main } from "../components/Main/Main";

export const HomePage = () => {
  return (
    <>
      <Main requests={requests} />

      <ModalMovies />

      <RowMovie id="1" title="UpComing" request={requests.requestUpcoming} />
      <RowMovie id="2" title="Popular" request={requests.requestPopular} />
      <RowMovie id="3" title="Trending" request={requests.requestTrending} />
      <RowMovie id="4" title="Top Rated" request={requests.requestTopRated} />
      <RowMovie id="5" title="Horror" request={requests.requestHorror} />
    </>
  );
};
