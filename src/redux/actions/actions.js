import {
  CREATE_CHECK,
  CREATE_EQUIP,
  DELETE_EQUIP,
  EDIT_EQUIP,
  CREATE_CHECKLIST,
  EDIT_CHECKLIST,
  DELETE_CHECKLIST,
} from './actionTypes';

export function createCheck(obj) {
  return {
    type: CREATE_CHECK,
    payload: obj,
  };
}

export function createEquip(obj) {
  return {
    type: CREATE_EQUIP,
    payload: obj,
  };
}

export function deleteEquip(id) {
  return {
    type: DELETE_EQUIP,
    payload: id,
  };
}

export function editEquip(obj) {
  return {
    type: EDIT_EQUIP,
    payload: obj,
  };
}

export function createChecklist(obj) {
  return {
    type: CREATE_CHECKLIST,
    payload: obj,
  };
}

export function editChecklist(obj) {
  return {
    type: EDIT_CHECKLIST,
    payload: obj,
  };
}

export function deleteChecklist(id) {
  return {
    type: DELETE_CHECKLIST,
    payload: id,
  };
}
