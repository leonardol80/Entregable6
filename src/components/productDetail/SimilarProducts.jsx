import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SimilarProducts = ({productInfo}) => {

    const [filterProducts, setFilterProducts] = useState()

    const products = useSelector(state => state.products)

    // console.log(products); Lo que esta en Edo global

// useEffect(()=>{
//     if (productInfo){
//         const filter = products.filter(e => e.category.name === productInfo.category)
//         setFilterProducts(filter)
//     }
// },[productInfo])

// console.log(filterProducts);

  return (
    <div>SimilarProducts</div>
  )
}

export default SimilarProducts