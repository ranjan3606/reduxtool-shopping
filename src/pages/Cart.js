import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.cart)

  const removeProduct = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      {
        product.map((product) => (
          <div className='cartCard'>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() =>  removeProduct(product.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart