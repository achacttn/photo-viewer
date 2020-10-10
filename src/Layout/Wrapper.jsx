import React from 'react';
import PropTypes from 'prop-types';
import style from './Wrapper.module.css';

const Wrapper = ({ children }) => (
  <div className={style.WrapperContainer}>
    <div className={style.WrapperContent}>
      {children}
    </div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.element,
};

Wrapper.defaultProps = {
  children: PropTypes.element,
};

export default Wrapper;
