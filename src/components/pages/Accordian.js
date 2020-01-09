import React, { Fragment, useContext } from 'react';
import Banner from '../layout/Banner';
import TextItem from '../layout/TextItem';

import { AccordContext } from '../AccordContext';
import { Redirect, Link } from 'react-router-dom';

const Accordian = () => {
  const [accords, setAccords] = useContext(AccordContext);

  if (!accords || accords.accord.length < 1) return <Redirect to='/' />;

  const title = 'Nulla imperdiet';

  return (
    <section id='accordian-page'>
      <Banner title={title} />
      <div className='accordian-wrapper'>
        {accords.accord.map((item, index) => (
          <TextItem key={index} title={item.title} content={item.desc} />
        ))}
      </div>
    </section>
  );
};

export default Accordian;
