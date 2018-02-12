import { AnyAction } from 'redux';

const ActionList = {
  SELECT_MONTH: 'SELECT_MONTH',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  CHANGE_CATEGORY_TEXT: 'CHANGE_CATEGORY_TEXT',
  SUBMIT_DATA: 'SUBMIT_DATA'
};

export default ActionList;

export function changeCategoryText(categoryText: string) {
  const action: AnyAction = {
    type: ActionList.CHANGE_CATEGORY_TEXT,
    categoryText
  };
  return action;
}

export function chooseMonth(monthChosen: string) {
  const action: AnyAction = {
    type: ActionList.SELECT_MONTH,
    monthChosen
  };
  return action;
}

export function chooseCategory(selectedCategory: string) {
  const action: AnyAction = {
    type: ActionList.SELECT_CATEGORY,
    selectedCategory
  };
  return action;
}

export function submitData(category: string, value: number){
  const action: AnyAction = {
    type: ActionList.SUBMIT_DATA,
    category,
    value
  };
  return action;
}
