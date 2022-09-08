import React from 'react'
import ProductPurchase from './ProductPurchase'
import './styles/productPurchase.css'

const PurchasesCard = ({purchase}) => {

// console.log(purchase);

  return (
    <article className='card-purchase'>
        <div className='container-fecha'>
            <h3 className='card-purchase__date'>{purchase.createdAt}</h3>
        </div>
        <ul className='card-purchase-body'>
            {
                purchase.cart.products.map(product => (
                    <ProductPurchase 
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </ul>
    </article>
  )
}

export default PurchasesCard