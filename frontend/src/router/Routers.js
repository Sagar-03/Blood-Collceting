import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Lab from './../pages/Lab'
import LabDetails from './../pages/LabDetails'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/lab/:id" element={<LabDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lab/search" element={< SearchResultList />} />
    
    </Routes>
  );
}

export default Routers
