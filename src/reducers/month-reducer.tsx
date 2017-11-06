import { AnyAction } from 'redux';
import ActionList from '../actions';

function selectMonth(state: string, action: AnyAction) {
  return action.monthChosen;
}

function monthReducer(state: string = 'Jan', action: AnyAction) {
  switch (action.type) {
    case ActionList.SELECT_MONTH:
      return selectMonth(state, action);
    default:
      return state;
  }
}

export default monthReducer;
