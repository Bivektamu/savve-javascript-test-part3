import React from 'react';
import logo from '../img/logo.png';
import globe from '../img/globe.png';

import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <section id='landing-page'>
      <div className='wrapper'>
        <h1 className='uppercase'>lorem ipsum</h1>
        <img src={logo} alt='logo-img' id='logo' />
        <NavLink to='/home'>
          <i class='fas fa-hand-point-right'></i>&nbsp;&nbsp;Click begin to get
          started
        </NavLink>
      </div>

      <img src={globe} alt='globe-img' id='globe' />
    </section>
  );
}

export default Landing;
