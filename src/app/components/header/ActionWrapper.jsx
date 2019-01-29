import React from 'react';
import Button from '@material-ui/core/Button';
import '../../assets/stylesheets/header.css'
import {
  FacebookIcon, FacebookShareButton,
  TwitterIcon, TwitterShareButton
} from 'react-share';

const ActionWrapper = () => {
  return (
    <div className="action-wrapper">
      <FacebookShareButton url="https://www.facebook.com/ThoughtWorks/" >
        <FacebookIcon className="action-item social-icon" />
      </FacebookShareButton>
      <TwitterShareButton url="https://twitter.com/thoughtworks">
        <TwitterIcon url="www" className="action-item social-icon" />
      </TwitterShareButton>
      <Button variant="outlined" className='action-item jcinemas-login-button'>
        Login/SignUp
    </Button>
    </div>
  )
}
export default ActionWrapper
