import { combineReducers } from 'redux';
import monthReducer from './month-reducer';
import categoryReducer from './category-reducer';

const rootReducer = combineReducers({
  selectedMonth: monthReducer,
  category: categoryReducer
});

export default rootReducer;
