import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';
import TextItem from './TextItem';

function Banner({ title, desc, beginButton }) {
  return (
    <div className='banner'>
      <img src={logo} alt='logo-img' className='logo' />
      <h1 className='banner-title'>{title}</h1>

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
  desc: PropTypes.array
};

export default Banner;
