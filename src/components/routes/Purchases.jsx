import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchasesCard from '../purchases/PurchasesCard'

const Purchases = () => {

const [purchases, setPurchases] = useState()

useEffect(()=>{
  const URL='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
  axios.get(URL,getConfig())
  .then(res => setPurchases(res.data.data.purchases))
  .catch(err => console.log(err))
},[])

// console.log(purchases)

  return (
    <div className='purchase'>
      <h2 className='purchase__title'>My Purchases</h2>
      {/* <div className='purchase__container'></div> */}
    {
      purchases?.map(purchase =>(
        <PurchasesCard 
        key={purchase.id}
        purchase ={purchase}
      />
      ))
    }
    </div>
  )
}

export default Purchases