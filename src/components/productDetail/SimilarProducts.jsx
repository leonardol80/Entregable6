import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const SimilarProducts = ({productInfo}) => {

    const [filterProducts, setFilterProducts] = useState()

    const products = useSelector(state => state.products)

    // console.log(products); Lo que esta en Edo global

useEffect(()=>{
    if (productInfo){
        const filter = products.filter(e => e.category.name === productInfo.category)
        setFilterProducts(filter)
    }
},[productInfo])

// console.log(filterProducts);

  return (
    // Evita que se renderize el mismo elemento seleccionado
    <div className='container-similar-products'>
        {
            filterProducts?.map(product => {
                if (product.title !== productInfo.category){
                    return <CardHome 
                    key={product.id}
                    product={product}
                    />
                }
            })
        }
    </div>
  )
}

export default SimilarProducts