import React from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Signin from './paths/Signin';
import Home from './paths/Home';
import Login from './paths/Login';
import Dashboard from '../components/Dashbord';

function App() {
 

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<Signin/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/dashboard" element={<Dashboard />}> </Route>
    </Routes>
    </>
  )
}

export default App;