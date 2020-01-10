import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';
import TextItem from './TextItem';
import { Link } from 'react-router-dom';

function Banner({ title, desc, caption, beginButton }) {
  return (
    <div className='banner'>
      <Link to='/'>
        <img src={logo} alt='logo-img' className='logo' />
      </Link>
      <h1 className='banner-title'>{title}</h1>

      <span>{caption && caption}</span>
      {(desc && desc.length) > 0 && (
        <Fragment>
          {desc.map((item, index) => (
            <TextItem key={index} content={item} />
          ))}
        </Fragment>
      )}

      {beginButton && beginButton}
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.array,
  caption: PropTypes.string,
  beginButton: PropTypes.object
};

export default Banner;
