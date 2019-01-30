import React from 'react';
import '../../assets/stylesheets/header.css'
import '../../../../node_modules/font-awesome/css/font-awesome.css'

const ActionWrapper = () => {
  return (
    <div className="action-wrapper">
      <a className="button-icon--blue" url="https://www.facebook.com/ThoughtWorks/" >
        <i class="fa fa-facebook"></i>
      </a>
      <a className="button-icon--skyblue" url="https://twitter.com/thoughtworks">
        <i className="fa fa-twitter"></i>
      </a>
      <button className='action-item jcinemas-login-button'>
        Login/SignUp
    </button>
    </div>
  )
}
export default ActionWrapper
