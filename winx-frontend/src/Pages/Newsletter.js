import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <div className="newsletter-title">
            <h2>Newsletter</h2>
        </div>
        <p>Get updates from your favorite products</p>

        <form action="">
            <div className="inputBox">
                <input type="email" placeholder='Enter email' />
                <button><AiOutlineSend /></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
