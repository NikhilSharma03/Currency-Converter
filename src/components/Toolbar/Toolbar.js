import React from 'react';
import './Toolbar.css';
import logo from './../../assets/logo.png';
import NavigationItems from './../NavigationItems/NavigationItems';

const Toolbar = () => (
  <header className="header">
    <div className="header--image__container">
      <img className="header--image__container-img" src={logo} alt="logo" />
      <label className="header--image__container-label">My Currency</label>
    </div>
    <nav className="header--nav">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
