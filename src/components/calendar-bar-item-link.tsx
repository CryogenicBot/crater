import { connect } from 'react-redux';
import CalendarBarItem from './calendar-bar-item';
import { Dispatch, AnyAction } from 'redux';
import { chooseMonth } from '../actions';
import { AppState } from './app-root';

function mapStateToProps(state: AppState) {
  return {
    selectedMonth: state.selectedMonth
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  let props: { chooseMonth: Function } = {
    chooseMonth: (month: string) => {
      dispatch(chooseMonth(month));
    }
  };
  return props;
}

const CalendarBarItemLink = connect(mapStateToProps, mapDispatchToProps)(
  CalendarBarItem
);

export default CalendarBarItemLink;
