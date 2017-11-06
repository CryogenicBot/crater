import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar-item.css';

export interface CalendarBarItemProps {
  month: string;
  selectedMonth: string;
  chooseMonth: Function;
}

class CalendarBarItem extends Component<CalendarBarItemProps, {}> {
  constructor(props: CalendarBarItemProps) {
    super(props);
  }

  render() {
    return (
      <li
        className={
          this.props.selectedMonth === this.props.month
            ? 'selected-calendar-bar-item'
            : 'calendar-bar-item'
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

export default CalendarBarItem;
