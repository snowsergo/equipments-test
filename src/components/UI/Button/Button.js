import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  const { text, type, disabled, onClick, group } = props;
  const cls = [classes.button, classes[group]];
  return (
    <button
      type={type}
      disabled={disabled}
      className={cls.join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
