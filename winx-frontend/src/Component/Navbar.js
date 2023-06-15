import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  // const cart = useContext(cartContext)
  const globalState = useContext(CartContext)
  const state = globalState.state

  const [navToggle, setNavToggle] = useState(false)
  const [navbar, setNavbar] = useState(false)

  // const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const topNavbar = () =>{
    if(window.scrollY >= 1.4){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', topNavbar)

  return (
    <nav className={navbar && 'active'}>
      <div className="web-title">
        <a href="#/"><h2>Winx</h2></a>
      </div>
      <div className="bar" onClick={() => {setNavToggle(!navToggle)}}>
        <span><RxHamburgerMenu /></span>
      </div>
      <div className={navToggle ? 'icons active' : 'icons'}>
        <div className="icon">
          {/* <Link to='/'>Register</Link>
          <Link to='/'>Log in</Link> */}
          <a href="#" onClick={() => setNavToggle(false)}>Register</a>
          <a href="#" onClick={() => setNavToggle(false)}>Login</a>
          <div className="cart" onClick={() => setNavToggle(false)}>
            <a href="#"><Link to='/cart'><AiOutlineShoppingCart /></Link></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
