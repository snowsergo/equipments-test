import { CREATE_CHECK } from '../actions/actionTypes';

const initialState = {
  checks: [],
};
export default function check(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHECK:
      return { ...state, checks: [...state.checks, action.payload] };
    default:
      return state;
  }
}
