import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import classes from './CreateChecklist.module.css';
import OutsideCLickHandler from 'react-outside-click-handler';
import AddRequire from '../AddRequire/AddRequire';

function CreateChecklist(props) {
  const { onCreate, onClose, equip } = props;
  const [checklist, setChecklist] = useState([]);

  function addRequirement(event, require) {
    event.preventDefault();
    setChecklist([...checklist, { id: Date.now(), requirement: require }]);
  }

  function deleteRequirement(event, require) {
    event.preventDefault();
    setChecklist(checklist.filter((el) => el.id !== require.id));
  }

  return (
    <OutsideCLickHandler onOutsideClick={onClose}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onCreate({
            equipment_id: equip.id,
            check_list: checklist,
          });
          onClose();
        }}
        className={classes.form}
      >
        <h2>Создать чеклист для оборудования: {equip.name}</h2>
        <div className={classes.results}>
          {checklist
            ? checklist.map((item, index) => {
                return (
                  <label className={classes.label} key={item.id}>
                    <p className={classes.require}>
                      {index + 1}. {item.requirement}
                    </p>

                    <Button
                      type='button'
                      group='cancel'
                      text='Удалить'
                      onClick={(event) => deleteRequirement(event, item)}
                    />
                  </label>
                );
              })
            : null}
        </div>

        <AddRequire onAdd={addRequirement} />

        <div className={classes.buttons}>
          <Button
            type='submit'
            disabled={!checklist.length}
            text='Сохранить'
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
    </OutsideCLickHandler>
  );
}

export default CreateChecklist;
