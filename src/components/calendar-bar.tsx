import * as React from 'react';
import { Component } from 'react';
import '../styles/calendar-bar.css';
import CalendarBarMonthLink from './calendar-bar-month-link';
import CalendarBarYear from './calendar-bar-year';

export interface CalendarProps {
  months: string[];
}

interface CalendarState {
  active: boolean;
}

class CalendarBar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.state = {
      active: false
    };
  }

  toggleCalendar() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className="calendar-container">
        <div
          className={
            this.state.active
              ? 'toggle-button-container-active'
              : 'toggle-button-container-inactive'
          }
          onClick={this.toggleCalendar}
        >
          <div id="toggle-button" />
        </div>
        <div
          id="calendar-bar-container"
          className={
            this.state.active
              ? 'calendar-bar-container-active'
              : 'calendar-bar-container-inactive'
          }
        >
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
