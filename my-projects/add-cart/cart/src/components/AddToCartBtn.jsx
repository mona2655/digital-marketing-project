import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeToCart } from '../store/addcartSlice'

function AddToCartBtn({ productId }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.addcart.items)

  const IsInCart = cartItems.includes(productId)
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <button className={`mt-3 px-4 py-2 rounded-lg transition ${
        IsInCart ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
      } text-white`}
       onClick={() => IsInCart ? dispatch(removeToCart(productId)) :
        dispatch(addToCart(productId))
       }>
       { IsInCart ? "Remove To Cart" : 'Add To Cart'} 
        </button>
      
    </div>
  )
}

export default AddToCartBtn;