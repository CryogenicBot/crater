import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar.css';
import CalendarBarMonthLink from './calendar-bar-month-link';
import CalendarBarYear from './calendar-bar-year';

export interface CalendarProps {
  months: string[];
}

class CalendarBar extends Component<CalendarProps, {}> {
  constructor(props: CalendarProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="toggle-button">Toggle Calendar</button>
        <div className="calendar-container">
          <CalendarBarYear />
          <ul className="calendar-list">
            {this.props.months.map(month => {
              return <CalendarBarMonthLink key={month} month={month} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CalendarBar;
