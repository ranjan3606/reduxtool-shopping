import React from 'react'
import Product from '../component/Product'

function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome to Redux Store</h2>
      <section>
        <h2>Product</h2>
        <Product />
      </section>
    </div>
  )
}

export default Home