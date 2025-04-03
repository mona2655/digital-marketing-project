import React from 'react'
import { addToCart , removeFromCart} from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function Cart({productId}) {
  const dispatch = useDispatch()
  const cartValue = useSelector((state) => state.cart.items)

  const IsInCart = cartValue.includes(productId)
  return (
   
 <button className={`rounded p-3 text-xl ${IsInCart ? 'bg-red-600' : 'bg-green-600'} text-white`}
 onClick={() => dispatch(IsInCart ?  removeFromCart( productId) : addToCart(productId) )}>

  {IsInCart? "Remove from cart" : "Add To Cart"}

 </button>
    

    
  )
}

export default Cart