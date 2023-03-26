
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/Navbar/NavBar'
import { HomePage } from '../pages/HomePage'
import { MoviesByPage } from '../pages/MoviesByPage'
import { SearchPage } from '../pages/SearchPage'
import { SeriesPage } from '../pages/SeriesPage'

export const NetflixRoutes = () => {


  return (
    <>

      <NavBar/>
    
        <Routes>

            <Route path='/' element={<HomePage/>}/>

            <Route path='/*' element={<Navigate to={'/'}/>}/>

            <Route path='/search' element={<SearchPage/>}/>

            <Route path='/series' element={<SeriesPage/>}/>

            <Route path='/movie/:idTitle' element={<HomePage/>}/> 

        </Routes>
    
    </>
  )
}
