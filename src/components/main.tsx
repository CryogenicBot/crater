import '../styles/main.css';
import * as React from 'react';
import CalendarBar from './calendar-bar';

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
      <div className="home">
        <CalendarBar months={monthList} />
      </div>
    );
  }
}

export default Main;
