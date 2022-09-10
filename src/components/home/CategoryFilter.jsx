import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductByCategory } from '../../store/slices/products.slice'

const CategoryFilter = () => {
const [categories, setCategories] = useState()


useEffect(()=>{
    URL='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
    .then(res=> setCategories(res.data.data.categories))
    .catch(err => console.log(err))
},[])

console.log(categories)

const dispatch=useDispatch()

const handleClickCategory = (id) => {
    dispatch(getProductByCategory(id))
}

  return (
    <div>
        <h2>Category</h2>
        <ul>
            <li>All Products</li>
            {
                categories?.map(category => (
                    <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
                ) )
            }
        </ul>
    </div>
  )
}

export default CategoryFilter