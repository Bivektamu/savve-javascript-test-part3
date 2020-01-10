import React, { Fragment, useContext, useState, useEffect } from 'react';
import Banner from '../layout/Banner';

import { AccordContext } from '../AccordContext';
import { Link } from 'react-router-dom';

const Topic = () => {
  const [topicAccords, setTopicAccords] = useState({
    accord: [
      {
        title: 'lorem ipsum',
        desc:
          'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
      },
      {
        title: 'lorem ipsum',
        desc:
          'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
      },
      {
        title: 'lorem ipsum',
        desc:
          'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
      },
      {
        title: 'lorem ipsum',
        desc:
          'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. '
      }
    ]
  });

  const [accords, setAccords] = useContext(AccordContext);

  useEffect(() => {
    //Display nav bar if on Topic page
    const navBar = document.getElementById('nav-bar');
    navBar.style.display = 'block';

    //Set accord provider with topic accordians
    setAccords({
      accord: topicAccords.accord
    });
  }, []);

  const title = 'lorem ipsum dolor sit';
  const beginButton = (
    <Fragment>
      <Link to='/accordian'>
        <button>BEGIN</button>
      </Link>
    </Fragment>
  );

  return (
    <section id='topic-page'>
      <div className='bg'></div>
      <Banner title={title} beginButton={beginButton} />
    </section>
  );
};

export default Topic;
