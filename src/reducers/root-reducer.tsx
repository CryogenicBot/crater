import { combineReducers } from 'redux';
import monthReducer from './month-reducer';
import categoryReducer from './category-reducer';
import dataReducer from './data-reducer';

const rootReducer = combineReducers({
  selectedMonth: monthReducer,
  categories: categoryReducer,
  data: dataReducer
});

export default rootReducer;
