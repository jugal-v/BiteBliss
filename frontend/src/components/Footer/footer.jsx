// import React from 'react'
import { assets } from '../../assets/assets';
import './footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <h2 className='logo'>BiteBliss.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, error temporibus tempore a iure molestiae neque! Accusamus laborum, harum quibusdam accusantium nesciunt earum! Dolores, animi qui. Molestias obcaecati dolores sunt?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-8901</li>
            <li>contact@bitebliss.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; BiteBliss - All rights Reserved 
      </p>
    </div>
  )
}

export default Footer;
