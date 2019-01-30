import React from 'react';
import TitleWrapper from './TitleWrapper'
import ActionWrapper from './ActionWrapper'
import '../../App.css';
import './Header.css';

const Header = () => (
  <div className="page-header">
    <TitleWrapper/>
    <ActionWrapper/>
  </div >
);

Header.defaultProps = {};

export default Header;
 