import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/*' element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App


