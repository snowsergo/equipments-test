import React, { useState, useRef } from 'react';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import { createCheck } from '../../redux/actions/actions';
import {
  hasChecklist,
  getEquipName,
  findChecklist,
} from '../../helpers/helper';
import useOutsideClick from '../../hooks/useOutsideClick';
import classes from './CreateCheck.module.css';

function CreateCheck(props) {
  const { checklists, equipments, onCreate, onClose } = props;
  const [newCheck, setNewCheck] = useState('');
  const ref = useRef();

  function selectHandler(event) {
    const newDemands = findChecklist(checklists, event.target.value);
    setNewCheck({
      date: new Date().toLocaleString(),
      equipment_id: +event.target.value,
      equipment_name: event.target.value
        ? getEquipName(+event.target.value, equipments)
        : '',
      demands: newDemands
        ? newDemands.map((item) => {
            return { id: item.id, status: false };
          })
        : [],
    });
  }

  function inputChange(event) {
    setNewCheck({
      ...newCheck,
      demands: newCheck.demands.map((obj) =>
        obj.id === +event.target.id ? { id: obj.id, status: !obj.status } : obj
      ),
    });
  }

  function submit(event) {
    event.preventDefault();
    onCreate(newCheck);
    onClose();
  }

  useOutsideClick(ref, onClose);

  return (
    <form ref={ref} className={classes.form} onSubmit={submit}>
      <h2>Создать проверку</h2>
      <select onChange={selectHandler}>
        <option value=''>Выберете оборудование</option>
        {equipments.map((item) => {
          return (
            <option name={item.name} value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      <div className={classes.list}>
        {hasChecklist(newCheck.equipment_id, checklists)
          ? findChecklist(checklists, newCheck.equipment_id).map((item) => {
              return (
                <label className={classes.label} key={item.id}>
                  <p className={classes.text}>{item.requirement}</p>
                  <input
                    onChange={inputChange}
                    type='checkbox'
                    id={item.id}
                  ></input>
                </label>
              );
            })
          : null}
      </div>

      <hr />

      {newCheck.equipment_id &&
      !hasChecklist(newCheck.equipment_id, checklists) ? (
        <p className={classes.error}>
          нет чеклиста для выбранного оборудования
        </p>
      ) : null}
      <div className={classes.buttons}>
        <Button
          disabled={
            !newCheck.equipment_id ||
            !hasChecklist(newCheck.equipment_id, checklists)
          }
          type='submit'
          text='Завершить'
          group='success'
        />
        <Button
          type='button'
          text='Отменить'
          group='cancel'
          onClick={onClose}
        />
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    checklists: state.checklists.checklists,
    equipments: state.equipments.equipments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: (obj) => dispatch(createCheck(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCheck);
