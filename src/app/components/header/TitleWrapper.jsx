import React from 'react';
import '../../assets/stylesheets/header.css';
import logo from '../../assets/images/JC_logo1.png';

const TitleWrapper = () => {
  return (
    <div className="title-wrapper">
      <img alt='jcinemas-logo' className="jcinemas-logo" src={logo}/>
      <h1>Just Cinemas</h1>
    </div>
  );
}

export default TitleWrapper