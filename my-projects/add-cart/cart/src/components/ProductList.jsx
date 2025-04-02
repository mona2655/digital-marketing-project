import React, { useEffect } from 'react'
import{fetchProducts} from '../store/productSlice'
import {useDispatch, useSelector} from 'react-redux'
import AddToCartBtn from './AddToCartBtn'

function ProductList() {
    const dispatch = useDispatch()
    const {items, status} = useSelector((state) => state.products)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch])

    if (status === 'loading') return <p>Loading products...</p>
    if(status=== 'failed') return <p>Failed to load products</p>

  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-center mb-4 text-3xl font-bold'>Product List</h1>
        <div className='flex flex-wrap justify-center gap-6 '>
        {items.map((product)=>(
            <div className='border p-4 rounded-lg shadow-lg flex flex-col items-center
            w-[230px]' key={product.id}>
                <img src={product.thumbnail} alt="{product.title}" style={{width:"150px", height:"150px"}} />
                <h2 className='text-center text-xl font-semibold mt-2'>{product.title}</h2>
                <p>${product.price}</p>
                <AddToCartBtn productId={product.id}/>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ProductList