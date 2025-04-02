import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../store/addcartSlice'

function RemoveToCart() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.addcart.items)
  return (
     <div className='flex flex-col items-center mt-4'>
          <button className='bg-green-600 text-white text-2xl p-4 rounded mb-4'
           onClick={() => dispatch(removeToCart())}
           disabled={cartItems === 0}>Remove To Cart</button>
           
        </div>
  )
}

export default RemoveToCart