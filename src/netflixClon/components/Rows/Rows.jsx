
import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { useSlideRow } from '../../hooks/useSlideRow'

export const Rows = ({title, request, id}) => {

    const [movies, setMovies] = useState([])
    const {slideLeft, slideRigth} = useSlideRow(id)

   useEffect(()=>{
    axios.get(request).then((response)=>{
        setMovies(response.data.results)
    })

   },[request])


  return (
    <>      
        <h2 className='text-white font-bold p-8 md:p-10 md:text-xl'>{title}</h2>

        <div className='relative flex items-center group'>

            <MdChevronLeft onClick={slideLeft} className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

            <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {
                    movies?.map((info)=> (
                        
                        <MovieCard key={info.id} id={id} info={info}/>

                    ))
                }

            </div>

            <MdChevronRight onClick={slideRigth} className='bg-white right-2 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block' size={40}/>

        </div>

    </>
  )
}
