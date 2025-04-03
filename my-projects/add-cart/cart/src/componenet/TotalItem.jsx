import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function TotalItem() {
    const countValue = useSelector((state) => state.cart.count) || 0;
  return (
    <div className='flex justify-center items-center mt-4 text-2xl'>
      <FontAwesomeIcon icon={faCartShopping} className="mr-2" /> <span>{countValue}</span>
        </div>
  )
}

export default TotalItem