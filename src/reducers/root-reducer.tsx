import { combineReducers } from 'redux';
import monthReducer from './month-reducer';

const rootReducer = combineReducers({
  selectedMonth: monthReducer
});

export default rootReducer;
