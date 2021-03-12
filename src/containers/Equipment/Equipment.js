import React from 'react';
import EquipTable from '../../components/EquipTable/EquipTable';
import Header from '../../components/Header/Header';

const header = {
  title: 'Перечень оборудования',
  link1: {
    route: '/checks',
    text: 'Проверки',
  },
  link2: {
    route: '/checklists',
    text: 'Чеклисты',
  },
};

function Equipment() {
  return (
    <div>
      <Header header={header} />
      <EquipTable />
    </div>
  );
}

export default Equipment;
