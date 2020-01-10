import React from 'react';
import PropTypes from 'prop-types';

const Accords = ({ index, title, content }) => {
  if (title) {
    //Function to toggle accordion
    const handleClick = e => {
      const parent = e.target.parentElement;
      const pTag = e.target.nextSibling;
      pTag.style.position = 'absolute';

      //toggle show-content class for article element to show to and accordion
      parent.classList.toggle('show-content');

      //if article element has show-content class then set its height to sum of its childrens node height
      if (parent.classList.contains('show-content')) {
        console.log(parent.clientHeight);
        console.log(pTag.clientHeight);
        let sum = parent.clientHeight + pTag.clientHeight + 20;
        parent.style.height = '' + sum + 'px';
      }

      //else set its height to only title element height
      else {
        const titleH = e.target.clientHeight;
        parent.style.height = '' + titleH + 'px';
      }
    };

    return (
      <article className='article'>
        <h3 className='uppercase' onClick={e => handleClick(e)}>
          {title}
        </h3>
        <p>{content}</p>
      </article>
    );
  }
  return <p>{content}</p>;
};

//check prop types
Accords.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Accords;
