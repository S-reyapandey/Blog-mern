import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import SignOut from './pages/SignOut';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-out' element={<SignOut/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
      
  )
}

