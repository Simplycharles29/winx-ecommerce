import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { json, useParams } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


const ProductDetail = ({ products }) => {
  // const cart = useContext(cartContext)
  // const productQuantity = cart.getProductQuantity(products.id)

  const globalState = useContext(CartContext)
  const dispatch = globalState.dispatch
  const state = globalState.state
  console.log(globalState)

  
  // const [singleProduct, setSingleProduct] = useState({})
  
  const { id } = useParams()

  const singleProduct = products.find((product) => String(product.id) === id) || {}

  return (
    <div className="product-detail-container">
      <Navbar />
      <div className='product-detail'>
      <div className="product">
        <div className="image">
          <img src={`http://127.0.0.1:8000${singleProduct.image}`} alt="" />
        </div>
        <div className="product-info">
          <h2 className="name">{singleProduct.name}</h2>
          <small>#{singleProduct.price}</small>
          <p>{singleProduct.description}</p>
          <div className="cart-flex">
          {/* <div className="span">
            <span className='cart-adding-value'>{singleProduct.quantity}</span>
          </div> */}
            <button onClick={() => dispatch({type: 'ADD', payload: singleProduct})}>Add to cart <AiOutlineShoppingCart /></button>
          </div>
          <h6>Category: {singleProduct.category}</h6>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail