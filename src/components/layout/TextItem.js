import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({ title, content }) => {
  if (title) {
    return (
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
      </article>
    );
  }
  return <p>{content}</p>;
};

TextItem.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextItem;
