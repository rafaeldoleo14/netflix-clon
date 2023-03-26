import React from 'react'
import { MovieCard } from '../../netflixClon/components/MovieCard/MovieCard';
import { getMovieByName } from '../../netflixClon/helpers/getMovieByName.js'

export const SearchPage = () => {

  const {movies, getRequests: allMovies, searchInput} = getMovieByName();

  const uniqueFilteredData = movies.filter((movie, index) => {
    const movieNames = movies.map((movie) => movie.name);
    return movieNames.indexOf(movie.name) === index;
  });


  return (
    <>
    
      <div className='pt-5 pb-5 pl-8 pr-8 md:pl-10 md:pr-10 text-center'>

        {

          uniqueFilteredData.length === 0 ? (
          <>

            <p className='text-white'>
              La busqueda de {`' ${searchInput} '`} no arrojo coincidencias.
            </p>

            <p className='text-white'>Sugerencias:</p>


            {
              allMovies && allMovies.map((info)=> (
            
                <MovieCard key={info.id} info={info}/>
    
              )) 
            }

          </>) :

          uniqueFilteredData && uniqueFilteredData.map((info)=> (
            
            <MovieCard key={info.id} info={info}/>

          )) 

        }


      </div>
    
    </>
  )
}
