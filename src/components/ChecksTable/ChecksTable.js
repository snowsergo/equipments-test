import React from 'react';
import classes from './ChecksTable.module.css';
import { isGoodValue, getPercent } from '../../helpers/helper';

function ChecksTable(props) {
  const { checks } = props;
  return (
    <div>
      <h2 className={classes.title}>Таблица проверок</h2>

      <div className={classes.head}>
        <p className={classes.head__text}>Начало проверки</p>
        <p className={classes.head__text}>Оборудование</p>
        <p className={classes.head__text}>Пройдено</p>
      </div>
      <div>
        {checks.map((check) => {
          return (
            <div
              className={
                isGoodValue(getPercent(check.demands))
                  ? classes.item__good
                  : classes.item__bad
              }
              key={check.date}
            >
              <p className={classes.item__text}>{check.date}</p>
              <p className={classes.item__text}>{check.equipment_name}</p>
              <p className={classes.item__text}>{getPercent(check.demands)}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChecksTable;
