import React, { useContext, useEffect, useState } from 'react'
import Navad from '../Component/Navad'
import Navbar from '../Component/Navbar'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { CartContext } from '../context/CartContext'

const Home = () => {

  const [scrollTop, setScrollTop] = useState(false)

  const scroll = () =>{
    if(window.scrollY >= 200){
      setScrollTop(true)
    }else{
      setScrollTop(false)
    }
  }

  window.addEventListener('scroll', scroll)

  const globalState = useContext(CartContext)

  return (
    <header id='/'>
      <Navad />
      <Navbar />
      <div className="showcase">
        <div className="hero-text">
          <h2>Dressing and appliances at its peak</h2>
          <p>Come and shop for your fashionable clothes and gadgets. <br /> Shopping made easy.</p>
          <a href="#products" className='showcase-btn'>Shop Now</a>
        </div>
      </div>
      <a href="#/" className={scrollTop ? 'scroll-top active' : 'scroll-top'}><AiOutlineArrowUp /></a>
    </header>
  )
}

export default Home
