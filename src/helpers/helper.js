export function isGoodValue(value) {
  return value >= 80;
}

export function getPercent(array) {
  const count = array.filter((obj) => obj.status === true).length;
  const percent = Math.round((count / array.length) * 100);
  return percent;
}

export function hasChecklist(id, array) {
  if (array.find((list) => list.equipment_id === id)) {
    return true;
  } else return false;
}

export function getEquipName(id, array) {
  return array.find((obj) => obj.id === id).name;
}

export function findChecklist(array, id) {
  const element = array.find((obj) => obj.equipment_id === +id);
  if (element) {
    return element.check_list;
  }
}

export function filter(name, array) {
  return array.filter((obj) =>
    obj.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function serchChecklist(id, array) {
  const list = array.find((obj) => obj.equipment_id === id);
  return list;
}

export function isQuestion(str) {
  if (str.match(/\?$/)) {
    return true;
  } else return false;
}

export function isNewEquipment(text, array) {
  if (array.find((obj) => obj.name.toLowerCase() === text.toLowerCase())) {
    return false;
  } else {
    return true;
  }
}
