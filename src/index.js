import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AccordProvider } from './components/AccordContext';

ReactDOM.render(
  <AccordProvider>
    <App />
  </AccordProvider>,
  document.getElementById('root')
);
