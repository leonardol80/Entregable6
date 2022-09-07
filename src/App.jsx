import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'
import Footer from './components/shared/Footer'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/purchases'element={<Purchases />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>

        <Route path='/cart'element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
