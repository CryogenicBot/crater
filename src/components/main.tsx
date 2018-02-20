import '../styles/main.css';
import * as React from 'react';
import RightColumnLink from './right-column-link';
import InputColumnLink from './input-column-link';

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

class Main extends React.Component<{}, {}> {
  
  render() {
    return (
      <div className="content-container">
        <div className="left-column">
          <InputColumnLink
            categoryPlaceholder={'What did you spend your money on?'}
            valuePlaceholder={'How much did you spend?'}
            monthList={monthList}
          />
        </div>
        <div className="right-column">
          <RightColumnLink />
        </div>
      </div>
    );
  }
}

export default Main;
