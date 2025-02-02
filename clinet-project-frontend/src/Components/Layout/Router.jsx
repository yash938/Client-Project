/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../Pages/Home';
import Services from '../Pages/Services'; 
import About from '../Pages/About'; 
import ConnectForm from '../Pages/ConnectForm';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Profile from '../Profiles/Profile';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/connect' element={<ConnectForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default Router;
