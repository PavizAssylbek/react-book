import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {

  const { onClick, className, outline, children } = props

  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  classname: PropTypes.string,
  outline: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  classname: "",
  outline: false
} 

export default Button;
