import React from 'react'
import './design-system/main.css'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    
    </Routes>
    
    </BrowserRouter>

       
    

  )
}
