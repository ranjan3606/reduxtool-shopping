import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice'
import {fetchProducts, STATUSES} from '../store/productSlice'

function Product() {
  const dispatch = useDispatch()
  const {data: products, status} = useSelector((state) => state.product)


  useEffect(() => {
    dispatch(fetchProducts())
  });

const handleAdd = (product) => {
  dispatch(add(product))
}

if(status === STATUSES.LOADING){
  return <h2>Loading...</h2>
}

if(status === STATUSES.ERROR){
  return <h2>Something went wrong!</h2>
}

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() =>  handleAdd(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
