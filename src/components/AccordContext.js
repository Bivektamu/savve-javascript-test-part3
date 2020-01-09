import React, { createContext, useState } from 'react';

export const AccordContext = createContext();

export const AccordProvider = props => {
  const [accords, setAccords] = useState({
    accord: []
  });
  return (
    <AccordContext.Provider value={[accords, setAccords]}>
      {props.children}
    </AccordContext.Provider>
  );
};
