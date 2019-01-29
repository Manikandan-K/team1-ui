import React from 'react';
import '../../assets/stylesheets/footer.css'
import {
  FacebookIcon,
  TwitterIcon
} from 'react-share';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <a className='about-us' href="#">About Us</a>
      <a className='terms-conditions' href="#">Terms & Conditions</a>
    </div>
  )
}

export default Footer