import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import classes from './AddRequire.module.css';
import { isQuestion } from '../../helpers/helper';

function AddRequire(props) {
  const { onAdd } = props;
  const [inputValue, setInputValue] = useState('');

  function handleInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className={classes.input}>
      <textarea
        className={classes.textarea}
        type='text'
        value={inputValue}
        onChange={(event) => handleInput(event)}
      />
      <Button
        disabled={!inputValue || !isQuestion(inputValue)}
        text='Добавить'
        onClick={(event) => {
          onAdd(event, inputValue);
          setInputValue('');
        }}
      />
    </div>
  );
}

export default AddRequire;
