import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import EditEquip from '../EditEquip/EditEquip';
import CreateEquip from '../CreateEquip/CreateEquip';
import { connect } from 'react-redux';
import {
  deleteEquip,
  editEquip,
  createEquip,
  deleteChecklist,
} from '../../redux/actions/actions';

import { filter } from '../../helpers/helper';
import classes from './EquipTable.module.css';

function EquipTable(props) {
  const { equipments, onDelete, onDeleteChecklist, onEdit, onCreate } = props;
  const [isEditFormOpen, setEditForm] = useState(false);
  const [equipToEdit, setEquipToEdit] = useState('');
  const [isCreateOpen, setCreateForm] = useState(false);
  const [searchName, setSearchName] = useState('');

  function searchHandler(event) {
    setSearchName(event.target.value);
  }

  function editHandler(element) {
    if (!equipToEdit) {
      setEquipToEdit(element);
      setEditForm(!isEditFormOpen);
    } else {
      setEquipToEdit('');
      setEditForm(!isEditFormOpen);
    }
  }

  function formHandler() {
    setCreateForm(!isCreateOpen);
  }

  return (
    <div>
      {isCreateOpen ? (
        <CreateEquip
          equipments={equipments}
          onCreate={onCreate}
          onClose={formHandler}
        />
      ) : null}
      {isEditFormOpen ? (
        <EditEquip
          onSubmit={onEdit}
          equipments={equipments}
          equip={equipToEdit}
          onClose={editHandler}
        />
      ) : null}

      <h2>Таблица оборудования</h2>

      <div className={classes.controls}>
        <form>
          <label>
            Поиск: <input onInput={searchHandler}></input>
          </label>
        </form>
        <Button text='Создать' onClick={formHandler}></Button>
      </div>

      <div className={classes.head}>
        <p className={classes.head__text}>Оборудование</p>
      </div>
      <div>
        {filter(searchName, equipments).map((element) => {
          return (
            <div className={classes.item} key={element.id}>
              <p className={classes.item__text}>{element.name}</p>
              <div className={classes.buttons}>
                <Button
                  text='Редактировать'
                  onClick={() => editHandler(element)}
                />
                <Button
                  text='Удалить'
                  onClick={() => {
                    onDelete(element.id);
                    onDeleteChecklist(element.id);
                  }}
                  group='cancel'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    equipments: state.equipments.equipments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteEquip(id)),
    onEdit: (obj) => dispatch(editEquip(obj)),
    onCreate: (obj) => dispatch(createEquip(obj)),
    onDeleteChecklist: (id) => dispatch(deleteChecklist(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipTable);
