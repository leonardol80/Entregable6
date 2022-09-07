import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import Aside from '../shared/Aside'

const Home = () => {

    const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getAllProducts())
},[])

const products = useSelector(state => state.products)
// console.log(products)

  return (
    <div className='home'>
      
      <div className='aside'>
        <Aside />
      </div>

      <div className='home__container-card'>
        {
          products?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))

        }
      </div>
    </div>
  )
}

export default Home