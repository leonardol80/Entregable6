import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    const getAllProductsCart = () => {
        const URL='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL,getConfig())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    }

    useEffect(()=>{

        getAllProductsCart()
        
    },[])

     const handleChekout =() => {
        const URL='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            stree: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL,obj,getConfig())
        .then(res => {
         console.log(res.data)
         getAllProductsCart()
        })
        .catch(err => console.log(err))
     }


  return (
    <section className='cart'>
        <h2 className='cart_title'>Cart</h2>
        <div className='cart__container-item'>
            {
                cartProducts?.map(product => (
                    <ProductCartInfo
                        key={product.id}
                        product={product}
                        getAllProductsCart={getAllProductsCart}
                    />
                ))
            }
        </div>
        
        <hr className='cart__hr' />

        <footer className='cart__footer'>
            <span className='cart_total-global-label'>Total:</span>
            <p className='cart_total-global-value'>1350</p>
            <button onClick={handleChekout} className='cart__btn'>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart