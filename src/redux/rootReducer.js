import { combineReducers } from 'redux';
import check from '../redux/reducers/check';
import equipments from '../redux/reducers/equipments';
import checklists from '../redux/reducers/checklists';

export default combineReducers({
  check,
  equipments,
  checklists,
});
