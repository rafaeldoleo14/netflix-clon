import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { useSlideRow } from '../../hooks/useSlideRow'
import { SeriesCard } from '../SeriesCard/SeriesCard'

export const RowsSeries = ({title, request, id}) => {

    const [series, setSeries] = useState([])
    const {slideLeft, slideRigth} = useSlideRow(id)

   useEffect(()=>{
    axios.get(request).then((response)=>{
        setSeries(response.data.results)
    })

   },[request])


  return (
    <>      
        <h2 className='text-white font-bold p-8 md:p-10 md:text-xl'>{title}</h2>

        <div className='relative flex items-center group'>

            <MdChevronLeft onClick={slideLeft} className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

            <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {
                    series?.map((info)=> (
                        
                        <SeriesCard key={info.id} id={id} info={info}/>

                    ))
                }

            </div>

            <MdChevronRight onClick={slideRigth} className='bg-white right-2 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block' size={40}/>

        </div>

    </>
  )
}
