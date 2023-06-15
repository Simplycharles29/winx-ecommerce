import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer'>
            <div className="about">
                <h2>Winx</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatem, debitis esse eos blanditiis ad repellendus dignissimos commodi unde adipisci voluptas doloremque dolores cum, veniam illum autem facere.</p>
                <div className="social-icons">
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaPinterestP /></a>
                    <a href='#'><FiGithub /></a>
                    <a href='#'><FaTwitter /></a>
                </div>
            </div>
            <div className="links">
                <h2>links</h2>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Cart</a>
                    </li>
                </ul>
            </div>
            <div className="contacts">
                <h2>contacts</h2>
                <div className="contact">
                    <span><BsFillTelephoneFill /></span>
                    <h5>+234 913 110 7309</h5>
                </div>
                <div className="contact">
                    <span><AiOutlineMail /></span>
                    <h5>simplycharles29@gmail.com</h5>
                </div>
                <div className="contact">
                    <span><ImLocation /></span>
                    <h5>622 California path, Washington DC</h5>
                </div>
            </div>
        </div>
        <hr />
        <div className="copyright">
            <h3>copyright &copy; django & react e-commerce by Charles Onyechere</h3> 
        </div>
    </div>
  )
}

export default Footer
