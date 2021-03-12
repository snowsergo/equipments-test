import React, { useState, useRef } from 'react';
import Button from '../../components/UI/Button/Button';
import useOutsideClick from '../../hooks/useOutsideClick';
import classes from './CreateEquip.module.css';

function CreateEquip(props) {
  const { equipments, onCreate, onClose } = props;
  const [name, setName] = useState('');
  const ref = useRef();

  function inputHandler(event) {
    setName(event.target.value);
  }

  function isNewEquipment(text, array) {
    if (array.find((obj) => obj.name.toLowerCase() === text.toLowerCase())) {
      return false;
    } else {
      return true;
    }
  }

  useOutsideClick(ref, onClose);
  return (
    <form
      ref={ref}
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
        onCreate({
          id: Date.now(),
          name: name,
        });
        onClose();
      }}
    >
      <h2>Создать оборудование</h2>
      <input
        className={classes.input}
        type='text'
        onInput={inputHandler}
      ></input>
      <div className={classes.buttons}>
        <Button
          disabled={!isNewEquipment(name, equipments) || !name}
          type='submit'
          text='Сохранить'
          group='success'
        />
        <Button
          type='button'
          text='Отменить'
          onClick={onClose}
          group='cancel'
        />
      </div>

      {isNewEquipment(name, equipments) ? null : (
        <p className={classes.error}>Такое оборудование уже есть</p>
      )}
    </form>
  );
}

export default CreateEquip;
