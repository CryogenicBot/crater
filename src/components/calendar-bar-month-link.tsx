import { connect } from 'react-redux';
import CalendarBarMonth from './calendar-bar-month';
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

const CalendarBarMonthLink = connect(mapStateToProps, mapDispatchToProps)(
  CalendarBarMonth
);

export default CalendarBarMonthLink;
