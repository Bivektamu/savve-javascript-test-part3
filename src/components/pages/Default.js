import React from 'react';

import { Redirect } from 'react-router-dom';

const Landing = () => {
  //redirect to homepage if route does not exist
  return <Redirect to='/' />;
};

export default Landing;
