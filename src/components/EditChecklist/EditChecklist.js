import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import EditRequire from '../EditRequire/EditRequire';
import classes from './EditChecklist.module.css';
import AddRequire from '../AddRequire/AddRequire';
import OutsideCLickHandler from 'react-outside-click-handler';

function EditChecklist(props) {
  const { equip, checklist, onClose, onSubmit, onDelete } = props;
  const [newChecklist, setNewChecklist] = useState(checklist);
  const [editForm, setEditForm] = useState(false);
  const [isFormChanged, setFormChanged] = useState(false);
  const [requireToEdit, setRequireToEdit] = useState('');

  function handleEditForm(event, require) {
    event.preventDefault();
    setRequireToEdit(require);
    setEditForm(!editForm);
  }
  function deleteRequire(require) {
    setNewChecklist({
      ...newChecklist,
      check_list: newChecklist.check_list.filter(
        (obj) => obj.id !== require.id
      ),
    });
    setFormChanged(true);
  }

  function closeEditForm() {
    setEditForm(!editForm);
  }

  function editRequire(require) {
    setNewChecklist({
      ...newChecklist,
      check_list: newChecklist.check_list.map((elem) =>
        elem.id === require.id ? require : elem
      ),
    });
    setFormChanged(true);
  }

  function submit(event) {
    event.preventDefault();
    if (newChecklist.check_list.length) {
      onSubmit(newChecklist);
    } else {
      onDelete(newChecklist.equipment_id);
    }
    onClose();
  }

  function addRequirement(event, require) {
    event.preventDefault();
    setNewChecklist({
      ...newChecklist,
      check_list: [
        ...newChecklist.check_list,
        { id: Date.now(), requirement: require },
      ],
    });
    setFormChanged(true);
  }

  return (
    <OutsideCLickHandler onOutsideClick={onClose}>
      <form className={classes.form} onSubmit={submit}>
        {editForm ? (
          <EditRequire
            require={requireToEdit}
            onClose={closeEditForm}
            onSubmit={editRequire}
          />
        ) : null}
        <h2>
          Изменить Чеклист для оборудования: <strong>{equip.name}</strong>
        </h2>
        <div>
          {newChecklist.check_list.map((elem) => {
            return (
              <div className={classes.item} key={elem.id}>
                <p className={classes.text}>{elem.requirement}</p>
                <div className={classes.buttons}>
                  <Button
                    text='Редактировать'
                    onClick={(event) => handleEditForm(event, elem)}
                  />
                  <Button
                    text='Удалить'
                    onClick={() => deleteRequire(elem)}
                    group='cancel'
                  />
                </div>
              </div>
            );
          })}
        </div>

        <AddRequire onAdd={addRequirement} />

        {newChecklist.check_list.length ? null : (
          <p>Удалить чеклист полностью?</p>
        )}
        <div className={classes.buttons_form}>
          <Button
            disabled={!isFormChanged}
            text='Сохранить'
            type='submit'
            group='success'
          />
          <Button
            type='button'
            text='Отменить'
            onClick={onClose}
            group='cancel'
          />
        </div>
      </form>
    </OutsideCLickHandler>
  );
}

export default EditChecklist;
