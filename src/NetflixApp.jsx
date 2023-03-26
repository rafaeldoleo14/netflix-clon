
import React from 'react'
import { SearchProvider } from './context/SearchContext/SearchProvider'
import { AppRouter } from './router/AppRouter'

export const NetflixApp = () => {
  return (
    
    <SearchProvider>

        <AppRouter/>
    
    </SearchProvider>

  )
}
