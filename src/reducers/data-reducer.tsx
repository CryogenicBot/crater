import { AnyAction } from 'redux';
import ActionList from '../actions';
import { BudgetData } from '../components/app-root';

function submitData(state: BudgetData[], action: AnyAction) {
  var newData: BudgetData[] = [...state];
  var category: string = action.category;
  var value: number = action.value;
  newData.push({ category: category, value: value });
  return newData;
}

function dataReducer(state: BudgetData[] = [], action: AnyAction) {
  switch (action.type) {
    case ActionList.SUBMIT_DATA:
      return submitData(state, action);
    default:
      return state;
  }
}

export default dataReducer;
