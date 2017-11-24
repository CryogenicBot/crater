import { AnyAction } from 'redux';
import ActionList from '../actions';

function selectCategory(
  state: { selectedCategory: string; categoryText: string },
  action: AnyAction
) {
  return {
    selectedCategory: action.selectedCategory,
    categoryText: ''
  };
}

function changeCategoryText(
  state: { selectedCategory: string; categoryText: string },
  action: AnyAction
) {
  return {
    selectedCategory: '',
    categoryText: action.categoryText
  };
}

function categoryReducer(
  state: { selectedCategory: string; categoryText: string } = {
    selectedCategory: '',
    categoryText: ''
  },
  action: AnyAction
) {
  switch (action.type) {
    case ActionList.SELECT_CATEGORY:
      return selectCategory(state, action);
    case ActionList.CHANGE_CATEGORY_TEXT:
      return changeCategoryText(state, action);
    default:
      return state;
  }
}

export default categoryReducer;
