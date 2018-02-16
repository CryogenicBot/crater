import { AnyAction } from 'redux';
import ActionList from '../actions';

function submitData(
  state: { category: string; value: number }[],
  action: AnyAction
) {
  var newData: { category: string; value: number }[] = [...state];
  var category: string = action.category;
  var value: number = action.value;
  newData.push({ category: category, value: value });
  return newData;
}

function dataReducer(
  state: { category: string; value: number }[] = [],
  action: AnyAction
) {
  switch (action.type) {
    case ActionList.SUBMIT_DATA:
      return submitData(state, action);
    default:
      return state;
  }
}

export default dataReducer;
