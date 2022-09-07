import React from 'react'

const ProductCartInfo = () => {
  return (
    <article className='cart__item'>
        <header className='cart__item-header'>
            <h3 className='cart__catergory'>Samsung</h3>
            <h4 className='cart__name'>Sansumg Galaxy J4</h4>
        </header>
        <i className="cart__trash fa-solid fa-trash-can"></i>
        <span className='cart__quantity'>1</span>
        <footer className='cart__item-footer'>
            <span className='cart__total-label'>Total:</span>
            <p className='cart__total-number'>850</p>
        </footer>
    </article>
  )
}

export default ProductCartInfo