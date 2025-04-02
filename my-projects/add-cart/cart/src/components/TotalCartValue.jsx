import React from 'react'

import { useSelector } from 'react-redux'

function TotalCartValue() {
    
    const cartItems = useSelector((state) => state.addcart.items)
  return (
    <div className='flex flex-col items-center mt-2' >Total cart items: {cartItems}</div>
  )
}

export default TotalCartValue