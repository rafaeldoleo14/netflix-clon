import React from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import './ModalSeries.css';
import { useHiddenModal } from '../../hooks/useHiddenModal';
import { useStopPropagation } from '../../hooks/useStopPropagation';
import {FaPlay} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import {getSeriesByTitle} from '../../helpers/getSeriesByTitle'

export const ModalSeries = () => {

    const {idTitle} = useParams();
    const result = getSeriesByTitle(idTitle);
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
                    className='img-modal' alt={result?.title} 
                />

                <div className='title-content'>

                    <p className='text-white'>{result?.title || result?.name}</p>

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

                        <p>{result?.release_date || result?.first_air_date} {result?.original_language}</p>

                    </div>

                    <p className='p-overview'>
                        {
                            result?.overview.substring(0,150) + '...' || 'Cooming soon'
                        }
                    </p>

                </div>

            </div>

        </div>

    </>
  )
}
