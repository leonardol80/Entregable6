import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'
import Aside from '../shared/Aside'


const Home = () => {

  const [inputSearch, setInputSearch] = useState('')
  const [filterProducts, setFilterProducts] = useState()

const products = useSelector(state => state.products)

useEffect(()=>{
  const filter=products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
  setFilterProducts(filter)
},[inputSearch])



// console.log(products)

  return (
    <div className='home'>
      <InputSearch setInputSearch={setInputSearch} />
      <CategoryFilter />
      <div className='aside'>
        <Aside />
      </div>

      <div className='home__container-card'>
        {
          filterProducts ?

          filterProducts?.map(product => (
            <CardHome 
              key={product.id}
              product={product}
            />
          ))

            :

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