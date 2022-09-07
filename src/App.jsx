import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/shared/Cart'
import Footer from './components/shared/Footer'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { getAllProducts } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
          <Route element={ProtectedRoutes}>
            <Route path='/purchases' element={<Purchases />}/>
            <Route path='/cart' element={<Cart />}/>
          </Route>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
