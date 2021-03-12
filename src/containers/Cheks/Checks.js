import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import ChecksTable from '../../components/ChecksTable/ChecksTable';
import CreateCheck from '../../components/CreateCheck/CreateCheck';
import Header from '../../components/Header/Header';
import classes from './Checks.module.css';

const header = {
  title: 'Перечень проверок',
  link1: {
    route: '/equipment',
    text: 'Оборудование',
  },
  link2: {
    route: '/checklists',
    text: 'Чеклисты',
  },
};

function Checks(props) {
  const [isFormOpen, setFormOpen] = useState(false);

  function toggleForm() {
    setFormOpen(!isFormOpen);
  }

  return (
    <div>
      <Header header={header}></Header>
      <div className={classes.buttons}>
        <Button text='Создать проверку' onClick={toggleForm} group='regular' />
      </div>
      <ChecksTable checks={props.checks} equipment={props.equipments} />
      {isFormOpen ? <CreateCheck onClose={toggleForm}></CreateCheck> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    checks: state.check.checks,
    equipments: state.equipments.equipments,
  };
}
export default connect(mapStateToProps)(Checks);
