import '../styles/main.css';
import * as React from 'react';
import StatsColumn from './stats-column';
import InputColumnLink from './input-column-link';

export interface MainProps {
  monthList: string[];
}

class Main extends React.Component<MainProps, {}> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="content-container">
          <div className="left-column">
            <InputColumnLink
              categoryPlaceholder={'What did you spend your money on?'}
              valuePlaceholder={'How much did you spend?'}
              monthList={this.props.monthList}
            />
          </div>
          <div className="right-column">
            <StatsColumn url={'/api'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
