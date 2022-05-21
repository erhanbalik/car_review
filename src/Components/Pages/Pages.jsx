import React from 'react'
import BrandDetail from './BrandDetail'
import MainMenu from './MainMenu'
import CarDetail from './CarDetail';
import Searched from "./Searched";
import ErrorPage from './ErrorPage'
import Signin from '../Header/Signin';
import Profile from '../Profile/Profile';

import { Route, Routes } from "react-router-dom";

/* Animation import */
import { AnimatePresence } from "framer-motion";

const Pages = () => {
    
  return (
          <AnimatePresence exitBeforeEnter>
            <Routes>
                <Route path='/' element={<MainMenu/>}/>
                <Route exact path='/list/:brand' element={<BrandDetail/>}/>
                <Route exact path='/detail/:model' element={<CarDetail/>}/>
                <Route path='/searched/:search' element={<Searched/>}/>
                <Route path='/sign' element={<Signin/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/searched/*' element={<ErrorPage/>}/>
            </Routes>
          </AnimatePresence>
  )
}

export default Pages