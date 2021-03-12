import {
  CREATE_CHECKLIST,
  EDIT_CHECKLIST,
  DELETE_CHECKLIST,
} from '../actions/actionTypes';
import checklists from '../../constants/checklists.json';

const initialState = {
  checklists: checklists,
};

export default function Checklists(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHECKLIST:
      return { ...state, checklists: [...state.checklists, action.payload] };

    case DELETE_CHECKLIST:
      return {
        ...state,
        checklists: state.checklists.filter(
          (el) => el.equipment_id !== action.payload
        ),
      };

    case EDIT_CHECKLIST:
      return {
        ...state,
        checklists: state.checklists.map((list) =>
          list.equipment_id === action.payload.equipment_id
            ? action.payload
            : list
        ),
      };

    default:
      return state;
  }
}
