import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar.css';
import CalendarBarItemLink from './calendar-bar-item-link';

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
            return <CalendarBarItemLink key={month} month={month} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CalendarBar;
