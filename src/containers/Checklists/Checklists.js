import React from 'react';
import ChecklistTable from '../../components/ChecklistTable/ChecklistTable';
import Header from '../../components/Header/Header';

const header = {
  title: 'Перечень чеклистов',
  link1: {
    route: '/equipment',
    text: 'Оборудование',
  },
  link2: {
    route: '/checks',
    text: 'Проверки',
  },
};

function Checklists() {
  return (
    <div>
      <Header header={header} />
      <ChecklistTable />
    </div>
  );
}

export default Checklists;
