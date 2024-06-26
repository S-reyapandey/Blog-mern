import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import FooterCom from './components/Footer';
import Scrollbar from './components/Scrollbar';
import ForgetP from './pages/ForgetP';
import ResetP from './pages/ResetP';


export default function App() {
  return (
    <BrowserRouter>
      <Scrollbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/forget' element={<ForgetP/>}/>
        <Route path='/reset' element={<ResetP/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
       <FooterCom/>
    </BrowserRouter>
      
  )
}

