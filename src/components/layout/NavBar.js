import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav id='nav-bar'>
        <ul>
          <li>
            <NavLink to='/home' activeClassName='active'>
              <i class='fas fa-home'></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/topic' activeClassName='active'>
              TOPIC 1
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
