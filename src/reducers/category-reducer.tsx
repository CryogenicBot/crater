import { AnyAction } from 'redux';
import ActionList from '../actions';

interface CategoryState {
  selectedCategory: string;
  categoryText: string;
  allCategories: string[];
  filteredCategories: string[];
}

function selectCategory(state: CategoryState, action: AnyAction) {
  return {
    selectedCategory: action.selectedCategory,
    categoryText: '',
    filteredCategories: [],
    allCategories: state.allCategories
  };
}

function changeCategoryText(state: CategoryState, action: AnyAction) {
  if (action.categoryText !== '') {
    var filteredCategories = [...state.allCategories].filter(category => {
      return category
        .toLowerCase()
        .startsWith(action.categoryText.toLowerCase());
    });
    return {
      selectedCategory: '',
      categoryText: action.categoryText,
      allCategories: state.allCategories,
      filteredCategories: filteredCategories
    };
  }
  return {
    selectedCategory: '',
    categoryText: action.categoryText,
    allCategories: state.allCategories,
    filteredCategories: []
  };
}

function addCategory(state: CategoryState, action: AnyAction) {
  var categoryFound = state.allCategories.find(category => {
    return category === action.category;
  });
  if (!categoryFound) {
    var newAllCategories = [...state.allCategories];
    newAllCategories.push(action.category);
    return {
      selectedCategory: state.selectedCategory,
      categoryText: state.categoryText,
      filteredCategories: state.filteredCategories,
      allCategories: newAllCategories
    };
  }
  return state;
}

function categoryReducer(
  state: CategoryState = {
    selectedCategory: '',
    categoryText: '',
    allCategories: [],
    filteredCategories: []
  },
  action: AnyAction
) {
  switch (action.type) {
    case ActionList.SELECT_CATEGORY:
      return selectCategory(state, action);
    case ActionList.CHANGE_CATEGORY_TEXT:
      return changeCategoryText(state, action);
    case ActionList.SUBMIT_DATA:
      return addCategory(state, action);
    default:
      return state;
  }
}

export default categoryReducer;
