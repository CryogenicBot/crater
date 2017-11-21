import '../styles/main.css';
import * as React from 'react';
import CalendarBar from './calendar-bar';
import StatsColumn from './stats-column';
import InputColumnLink from './input-column-link';

export interface MainProps {
  monthList: string[];
}

class Main extends React.Component<MainProps, {}> {
  render() {
    return (
      <div>
        <CalendarBar months={this.props.monthList} />
        <div className="content-container">
          <div className="left-column">
            <InputColumnLink
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
