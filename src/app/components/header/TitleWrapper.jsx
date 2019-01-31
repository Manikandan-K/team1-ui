import React from 'react';
import '../../assets/stylesheets/header.css';
import logo from '../../assets/images/JC_logo1.png';
import { Link } from 'react-router-dom';

const TitleWrapper = () => {
  return (
    <Link to="/">
    <div className="title-wrapper">
      <img alt='jcinemas-logo' className="jcinemas-logo" src={logo}/>
      <h1>Just Cinemas</h1>
    </div>
    </Link>
  );
}

export default TitleWrapper