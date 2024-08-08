import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../../pages/Dashboard'
import Navbar from '../../components/Navbar'

function index() {
  return ( 
    <div className='container mx-auto px-10  flex justify-between'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='profile' element={<Profile/> }/>
    </Routes>

    </div>
  )
}

export default index
