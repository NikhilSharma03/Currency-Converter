import React from 'react';
import './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = () => (
  <ul className="navigation__ul">
    <li className="navigation__ul--li">
      <NavLink
        activeStyle={{
          color: '#ccc',
          border: '1px solid #fff',
          borderRadius: '5px',
        }}
        exact
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className="navigation__ul--li">
      <NavLink
        activeStyle={{
          color: '#ccc',
          border: '1px solid #fff',
          borderRadius: '5px',
        }}
        to="/convert"
      >
        Convert
      </NavLink>
    </li>
  </ul>
);

export default NavigationItems;
