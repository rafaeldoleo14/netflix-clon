
import React from 'react'
import { useParams } from 'react-router-dom'
import { getMovieByTitle } from '../../helpers/getMovieByTitle'
import './MovieBy.css';
import {AiFillStar} from 'react-icons/ai'

export const MovieBy = () => {

    const {idTitle} = useParams();
    const result = getMovieByTitle(idTitle);
    
  return (
    <>
    
        {

            <div className='moviBy-container'>

              <div className='movieBy-container-2'>

              <div className='movieByImg-container'>
                <img src={`https://image.tmdb.org/t/p/w500${result?.backdrop_path}`} alt="" />                  
              </div>

                  <div className='movieBySecond-container'>

                    <h1 className='movieBy-title'>{result?.title || 'Titulo no disponible'}</h1>

                    <p style={{fontWeight: 'bold '}}>Sinopsis:</p>

                    <div className='movieBy-overview'>
                      <p>{result?.overview}</p>
                    </div>

                    <div className='movieBy-date'>
                      <p><span>Fecha de estreno:</span> {result?.first_air_date || result?.release_date}</p>
                      <p><span>Rating:</span> <AiFillStar color='yellow' style={{display: 'inline'}}/> {result?.vote_average} / 10</p>
                    </div>

                  </div>

              </div>

            </div>
        
        }
    
    </>
  )
}
