import '../styles/main.css';
import * as React from 'react';
import StatsColumn from './stats-column';
import InputColumnLink from './input-column-link';

export interface MainProps {
  monthList: string[];
}

let data: any = {};

class Main extends React.Component<MainProps, {}> {
  constructor(props: MainProps) {
    super(props);
    var myHeaders: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    fetch('/api', {
      headers: myHeaders
    })
      .then(function(response: any) {
        return response.json();
      })
      .then(function(json: JSON) {
        data = json;
        console.log(data);
      });
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
            <StatsColumn data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
