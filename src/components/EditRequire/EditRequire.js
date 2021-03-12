import React, { useState, useRef } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './EditRequire.module.css';
import { isQuestion } from '../../helpers/helper';
import useOutsideClick from '../../hooks/useOutsideClick';

function EditRequire(props) {
  const { require, onClose, onSubmit } = props;
  const [newRequire, setNewRquire] = useState(require);
  const [isChanged, setChanged] = useState(false);
  const ref = useRef();

  function inputHandler(event) {
    setNewRquire({ ...newRequire, requirement: event.target.value });
    setChanged(true);
  }

  useOutsideClick(ref, onClose);
  return (
    <div ref={ref} className={classes.form}>
      <h2>Изменить требование:</h2>

      <textarea
        className={classes.text}
        type='text'
        onInput={inputHandler}
        value={newRequire.requirement}
      />
      <div className={classes.buttons}>
        <Button
          disabled={!(isChanged && isQuestion(newRequire.requirement))}
          group='success'
          type='submit'
          text='Сохранить'
          onClick={(event) => {
            event.preventDefault();
            onSubmit(newRequire);
            onClose();
          }}
        />
        <Button
          type='button'
          text='Отменить'
          onClick={onClose}
          group='cancel'
        />
      </div>
    </div>
  );
}

export default EditRequire;
