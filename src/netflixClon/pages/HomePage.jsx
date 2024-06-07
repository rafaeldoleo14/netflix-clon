import React from "react";
import { Main } from "../../netflixClon/components/Main/Main";
import { Rows } from "../../netflixClon/components/Rows/Rows";
import requests from "../../data/requests";
import { ModalMovies } from "../components/ModalMovies/ModalMovies";

export const HomePage = () => {
  return (
    <>
      <Main requests={requests} />

      <ModalMovies />

      <Rows id="1" title="UpComing" request={requests.requestUpcoming} />

      <Rows id="2" title="Popular" request={requests.requestPopular} />
      <Rows id="3" title="Trending" request={requests.requestTrending} />
      <Rows id="4" title="Top Rated" request={requests.requestTopRated} />
      <Rows id="5" title="Horror" request={requests.requestHorror} />
    </>
  );
};
