import React from 'react'
import Banner from '../Banner/Banner'
import ProductsLayout from '../products/ProductsLayout'

const Home = () => {
  return (
    <div className='w-full mx-auto'>
      <Banner />
      <ProductsLayout />
    </div>
  )
}

export default Home
