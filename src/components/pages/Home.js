import React, { useEffect } from 'react';
import Banner from '../layout/Banner';

const Home = () => {
  useEffect(() => {
    const navBar = document.getElementById('nav-bar');
    navBar.style.display = 'block';
  }, []);

  const title = 'lorem ipsum';
  const desc = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  return (
    <section id='home-page'>
      <div className='bg'></div>
      <Banner title={title} desc={desc} />
    </section>
  );
};

export default Home;
