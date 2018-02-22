import { AnyAction } from 'redux';
import ActionList from '../actions';

function addCategory(state: string[], action: AnyAction) {
  return [...state].push(action.category);
}

function categoryReducer(state: string[] = [], action: AnyAction) {
  switch (action.type) {
    case ActionList.ADD_CATEGORY:
      return addCategory(state, action);
    default:
      return state;
  }
}

export default categoryReducer;
