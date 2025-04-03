import React from 'react'

import {  removeFromCart } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function Remove() {
     const dispatch = useDispatch()
      const countValue = useSelector((state) => state.cart.count)
  return (
    <div>
        <div>
              <button className='bg-green-600 text-white rounded p-3 text-xl' onClick={() => dispatch(removeFromCart())}>Remove From Cart</button>
            </div>
    </div>
  )
}

export default Remove