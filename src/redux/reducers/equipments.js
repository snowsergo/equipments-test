import { CREATE_EQUIP, EDIT_EQUIP, DELETE_EQUIP } from '../actions/actionTypes';
import equipments from '../../constants/equipments.json';

const initialState = {
  equipments: equipments,
};

export default function Equipment(state = initialState, action) {
  switch (action.type) {
    case CREATE_EQUIP:
      return { ...state, equipments: [...state.equipments, action.payload] };

    case DELETE_EQUIP:
      return {
        ...state,
        equipments: state.equipments.filter((el) => el.id !== action.payload),
      };

    case EDIT_EQUIP:
      return {
        ...state,
        equipments: state.equipments.map((equip) =>
          equip.id === action.payload.id ? action.payload : equip
        ),
      };

    default:
      return state;
  }
}
