import React, { useState, useRef } from 'react';
import Button from '../../components/UI/Button/Button';
import { isNewEquipment } from '../../helpers/helper';
import useOutsideClick from '../../hooks/useOutsideClick';
import classes from './EditEquip.module.css';

function EditEquip(props) {
  const { equip, onClose, onSubmit, equipments } = props;
  const [name, setName] = useState('');
  const ref = useRef();

  function inputHandler(event) {
    setName(event.target.value);
  }

  useOutsideClick(ref, onClose);

  return (
    <form
      ref={ref}
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          id: equip.id,
          name: name,
        });
        onClose();
      }}
    >
      <h2>Изменить оборудование: {equip.name}</h2>
      <input type='text' onInput={inputHandler} placeholder={equip.name} />
      <div className={classes.buttons}>
        <Button
          disabled={
            name === equip.name || !name || !isNewEquipment(name, equipments)
          }
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

      {isNewEquipment(name, equipments) ||
      name.toLowerCase() === equip.name.toLowerCase() ? null : (
        <p className={classes.error}>Такое оборудование уже существует</p>
      )}
    </form>
  );
}

export default EditEquip;
