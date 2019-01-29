import React from 'react';
import Button from '@material-ui/core/Button';
import '../../assets/stylesheets/header.css'
import {
  FacebookIcon,
  TwitterIcon
} from 'react-share';

const ActionWrapper = () => {
  return (
    <div className="action-wrapper">
      <FacebookIcon url="www" className="action-item social-icon" />
      <TwitterIcon url="www" className="action-item social-icon" />
      <Button variant="outlined" className='action-item jcinemas-login-button'>
        Login/SignUp
    </Button>
    </div>
  )
}
export default ActionWrapper
