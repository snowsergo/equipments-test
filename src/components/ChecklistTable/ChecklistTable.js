import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import CreateChecklist from '../CreateChecklist/CreateChecklist';
import EditChecklist from '../EditChecklist/EditChecklist';
import { connect } from 'react-redux';
import {
  deleteChecklist,
  editChecklist,
  createChecklist,
} from '../../redux/actions/actions';
import { hasChecklist, serchChecklist } from '../../helpers/helper';
import classes from './ChecklistTable.module.css';

function ChecklistTable(props) {
  const { equipments, checklists, onCreate, onDelete, onEdit } = props;
  const [isCreateForm, setCreateForm] = useState(false);
  const [isEditForm, setEditForm] = useState(false);
  const [checklistToEdit, setCheckToEdit] = useState('');
  const [equipToCreate, setEquipToCreate] = useState('');
  const [equipToEdit, setEquipToEdit] = useState('');

  function handleCreateForm(element) {
    if (!equipToCreate) {
      setEquipToCreate(element);
    } else {
      setEquipToCreate('');
    }
    setCreateForm(!isCreateForm);
  }

  function handleEditForm(checklist, equip) {
    if (!checklistToEdit) {
      setCheckToEdit(checklist);
      setEquipToEdit(equip);
    } else {
      setCheckToEdit('');
    }
    setEditForm(!isEditForm);
  }

  function closeCreateForm() {
    setCreateForm(!isCreateForm);
    setEquipToCreate('');
  }

  function closeEditForm() {
    setEditForm(!isEditForm);
    setCheckToEdit('');
  }

  return (
    <div>
      {isCreateForm ? (
        <CreateChecklist
          equip={equipToCreate}
          onCreate={onCreate}
          onClose={closeCreateForm}
        />
      ) : null}
      {isEditForm ? (
        <EditChecklist
          equip={equipToEdit}
          checklist={checklistToEdit}
          onClose={closeEditForm}
          onSubmit={onEdit}
          onDelete={onDelete}
        />
      ) : null}
      <h2>Таблица Чеклистов</h2>
      <div className={classes.head}>
        <p className={classes.head__text}>Оборудование</p>
        <p className={classes.head__text}>Чеклист</p>
      </div>

      <div>
        {equipments.map((element) => {
          return (
            <div className={classes.item} key={element.id}>
              <p className={classes.item__text}>{element.name}</p>

              {hasChecklist(element.id, checklists) ? (
                <i className={`fa fa-check ${classes.success}`} />
              ) : (
                <i className={`fa fa-times ${classes.cancel}`} />
              )}

              {hasChecklist(element.id, checklists) ? (
                <div className={classes.buttons}>
                  <Button
                    text='Редактировать'
                    onClick={() =>
                      handleEditForm(
                        serchChecklist(element.id, checklists),
                        element
                      )
                    }
                  />
                  <Button
                    group='cancel'
                    text='Удалить'
                    onClick={(event) => {
                      event.preventDefault();
                      onDelete(
                        serchChecklist(element.id, checklists).equipment_id
                      );
                    }}
                  />
                </div>
              ) : (
                <div className={classes.buttons}>
                  <Button
                    text='Создать'
                    onClick={() => handleCreateForm(element)}
                  />
                </div>
              )}
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
    checklists: state.checklists.checklists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteChecklist(id)),
    onEdit: (obj) => dispatch(editChecklist(obj)),
    onCreate: (obj) => dispatch(createChecklist(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistTable);
