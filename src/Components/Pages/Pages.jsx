import React from 'react'
import BrandDetail from './BrandDetail'
import MainMenu from './MainMenu'
import CarDetail from './CarDetail';
import Searched from "./Searched";
import ErrorPage from './ErrorPage'

import { Route, Routes } from "react-router-dom";

const Pages = () => {
    
  return (
        <Routes>
            <Route path='/' element={<MainMenu/>}/>
            <Route exact path='/list/:brand' element={<BrandDetail/>}/>
            <Route exact path='/detail/:model' element={<CarDetail/>}/>
            <Route path='/searched/:search' element={<Searched/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
  )
}

export default Pages