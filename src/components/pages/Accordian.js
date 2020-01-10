import React, { Fragment, useContext, useEffect } from 'react';
import Banner from '../layout/Banner';
import Accords from '../layout/Accords';

import { AccordContext } from '../AccordContext';
import { Redirect, Link } from 'react-router-dom';

const Accordian = () => {
  useEffect(() => {
    const navBar = document.getElementById('nav-bar');
    navBar.style.display = 'none';

    const articleList = document.getElementsByTagName('article');
    if (articleList.length > 0) {
      articleList[0].classList.add('show-content');

      for (let i = 0; i < articleList.length; i++) {
        const parent = articleList[i];
        const pTag = parent.lastChild;
        const hTag = parent.firstChild;

        if (parent.classList.contains('show-content')) {
          const sum = hTag.clientHeight + pTag.clientHeight + 20;
          parent.style.height = '' + sum + 'px';
        } else {
          parent.style.height = '' + hTag.clientHeight + 'px';
        }
      }
    }
  }, []);

  const [accords, setAccords] = useContext(AccordContext);

  if (!accords || accords.accord.length < 1) return <Redirect to='/topic' />;

  const title = 'Nulla imperdiet';
  const caption = 'Vestibulum dapibus hendrerit nibh ut ornare.';
  const desc = [
    'Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.'
  ];

  return (
    <section id='accordian-page'>
      <div className='bg'></div>

      <Banner title={title} caption={caption} desc={desc} />
      <div className='accordian-wrapper'>
        {accords.accord.map((item, index) => (
          <Accords
            key={index}
            index={index}
            title={item.title}
            content={item.desc}
          />
        ))}
      </div>
      <div className='pre-next'>
        <Link to='/topic' className='pre'>
          back
        </Link>
        <Link to='/home' className='next'>
          next
        </Link>
      </div>
    </section>
  );
};

export default Accordian;
