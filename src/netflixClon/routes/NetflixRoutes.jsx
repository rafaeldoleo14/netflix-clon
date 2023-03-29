
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/Navbar/NavBar'
import { HomePage } from '../pages/HomePage'
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

            <Route path='/serie/:idTitle' element={<SeriesPage/>}/> 

        </Routes>
    
    </>
  )
}
