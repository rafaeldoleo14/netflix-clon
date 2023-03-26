
import queryString from 'query-string';
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext/SearchContext';

export const SearchBar = () => {

    const {searchInput, setSearchInput} = useContext(SearchContext);
    const navigate = useNavigate();

    const onInput = (e)=>{
        e.preventDefault();
        setSearchInput(e.target.value);
        
        if(e.target.value !== ''){
          navigate('/search')
        }
        else{
          navigate('/');
        }
        
    }
    
  return (
    <>
    
        <input id='input' onChange={onInput} value={searchInput} 
        className={`bg-black opacity- p-2 text-white rounded border border-white`} 
        type="text" placeholder='Buscar'/>

    </>
  )
}
