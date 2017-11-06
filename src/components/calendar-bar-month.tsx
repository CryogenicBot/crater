import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar-month.css';

export interface CalendarBarMonthProps {
  month: string;
  selectedMonth: string;
  chooseMonth: Function;
}

class CalendarBarMonth extends Component<CalendarBarMonthProps, {}> {
  constructor(props: CalendarBarMonthProps) {
    super(props);
  }

  render() {
    return (
      <li
        className={
          this.props.selectedMonth === this.props.month
            ? 'selected-calendar-bar-month'
            : 'calendar-bar-month'
        }
        onClick={() => {
          this.props.chooseMonth(this.props.month);
        }}
      >
        {this.props.month}
      </li>
    );
  }
}

export default CalendarBarMonth;
