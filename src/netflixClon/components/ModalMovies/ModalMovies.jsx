
import React from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import './ModalMovie.css';
import { getMovieByTitle } from '../../helpers/getMovieByTitle';
import { useHiddenModal } from '../../hooks/useHiddenModal';
import { useStopPropagation } from '../../hooks/useStopPropagation';
import {FaPlay} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'

export const ModalMovies = () => {

    const {idTitle} = useParams();
    const result = getMovieByTitle(idTitle);
    const {hiddenModal, onHiddenModal} = useHiddenModal(idTitle);
    const {onPropagation} = useStopPropagation();

    console.log(result)
    
    return (
    <>
    
        <div onClick={onHiddenModal} className='modal-container' style={{display: `${hiddenModal ? '' : 'flex'}`}}>
            
            <div onClick={onPropagation} className='modal-box rounded-10 animate__animated animate__zoomIn' style={{opacity: `${hiddenModal ? '' : '1'}`}}>

                <div className='absolute z-10 right-2 p-2 bg-black rounded-full modal-icon cursor-pointer' onClick={onHiddenModal}>
                    <AiOutlineClose size={20} color={'white'}/>
                </div>

                <img src={`https://image.tmdb.org/t/p/original${result?.backdrop_path || result?.poster_path}`} 
                    className='w-full object-cover img-modal' alt={result?.title} 
                />

                <div className='title-content'>

                    <p className='text-white'>{result?.title}</p>

                    <div className='actions-content'>
                        <button className='btn-movie'><FaPlay size={22}/> Reproducir</button>

                        <div>
                            <AiOutlinePlus color='white' size={20}/>
                        </div>

                        <div>
                            <BiLike color='white' size={20}/>
                        </div>

                    </div>

                </div>

                <div className='info-content'>

                    <div className=''>

                        <p><span>{result?.vote_count} puntuacion</span></p>

                        <p>{result?.release_date} {result?.original_language}</p>

                    </div>

                    <p className='p-overview'>{result?.overview}</p>

                </div>

            </div>

        </div>

    </>
  )
}
