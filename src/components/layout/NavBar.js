import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav id='nav-bar'>
      <ul>
        <li>
          <NavLink to='/home' activeClassName='active'>
            <i class='fas fa-home'></i> Home
          </NavLink>
          <NavLink to='/topic' activeClassName='active'>
            TOPIC 1
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
