import React from 'react'
import Home from './Home'
import Categories from './Categories'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Content = ({ products }) => {
  return (
    <div>
      <Home />
      <Categories />
      <Products products={products}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Content
