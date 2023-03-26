
import React, { useState } from 'react'
import { SearchContext } from './SearchContext'

export const SearchProvider = ({children}) => {

    const [searchInput, setSearchInput] = useState('');
    const [getRequests, setGetRequests] = useState([])
    const [getAllMovies, setGetAllMovies] = useState('')


  return (
    <SearchContext.Provider value={{searchInput, setSearchInput , getRequests, setGetRequests,
      setGetAllMovies, getAllMovies}}>

        {children}
        
    </SearchContext.Provider>
  )
}
