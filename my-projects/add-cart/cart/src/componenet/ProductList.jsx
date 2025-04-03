import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProduct} from '../store/productSlice'
import Cart from './Cart'

function ProductList() {
    const dispatch = useDispatch()
    const {products, status, error} = useSelector((state) => state.product);

    useEffect(() => {
       dispatch(fetchProduct())
    },[dispatch])

  return (
    <div>
        {status === "loading" && <p>Loading....</p>}
        {status === 'succeeded' &&(
            <div className='flex flex-wrap gap-4 '>
                {products.map((item) => (
                    <div key={item.id} className='border-2 p-4 mx-auto w-[220px]'>
                  <img className='mt-6 items-center' src={item.image} alt={item.title} style={{width: '150px', height: '150px'}} />
                  <h2 className='text-center mt-4 text-xl'>{item.title}</h2>
                  <p className='text-2xl font-bold mt-4 text-center'>${item.price}</p>

                  <Cart productId={item.id}/>
            </div>
                  ))}
                </div>
        )}
        {status === "failed" && <p>Failed to load Product...{error}</p>}
        
    </div>
  )
}

export default ProductList