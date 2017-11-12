import '../styles/main.css';
import * as React from 'react';
import CalendarBar from './calendar-bar';
import StatsColumn from './stats-column';
import InputColumn from './input-column';

const monthList: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <CalendarBar months={monthList} />
        <div className="content-container">
          <div className="left-column">
            <InputColumn
              categoryPlaceholder={'What did you spend your money on?'}
              valuePlaceholder={'How much did you spend?'}
            />
          </div>
          <div className="right-column">
            <StatsColumn />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
