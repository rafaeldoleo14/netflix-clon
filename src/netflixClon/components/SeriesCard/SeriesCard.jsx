import React from 'react'
import { Link } from 'react-router-dom';
import imgFound from '../../../assets/img/imgFound.jpg';

export const SeriesCard = ({id, info}) => {

  return (
    <>
    
    <Link to={`/serie/${info?.title || info?.name}`} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

        <img className='w-full h-auto block' src={`${info.backdrop_path ? `https://image.tmdb.org/t/p/w500${info?.backdrop_path}` : `${imgFound}`} `} alt={info?.title} />

        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{info?.title || info?.name}</p>

        </div>

    </Link>
    
    </>
  )
}
