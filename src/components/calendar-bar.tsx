import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar.css';
import CalendarBarMonthLink from './calendar-bar-month-link';

export interface CalendarProps {
  months: string[];
}

class CalendarBar extends Component<CalendarProps, {}> {
  constructor(props: CalendarProps) {
    super(props);
  }

  render() {
    return (
      <div className="calendar-container">
        <ul className="calendar-list">
          {this.props.months.map(month => {
            return <CalendarBarMonthLink key={month} month={month} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CalendarBar;
