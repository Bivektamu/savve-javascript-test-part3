import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({ content }) => {
  return <p>{content}</p>;
};

TextItem.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextItem;
