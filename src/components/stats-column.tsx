import * as React from 'react';
import { VictoryPie } from 'victory';

export interface StatsProps {
  url: string;
}

export interface StatsState {
  data: [
    {
      category: string;
      value: number;
    }
  ];
}

class StatsColumn extends React.Component<StatsProps, StatsState> {
  constructor(props: StatsProps) {
    super(props);
    this.state = {
      data: [{ category: 'default', value: 100 }]
    };
  }

  componentDidMount() {
    var myHeaders: Headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    fetch('/api', {
      headers: myHeaders
    })
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          'Response was: ' + response.status + ' ' + response.statusText
        );
      })
      .then((json: StatsState['data']) => {
        this.setState({ data: json });
      })
      .catch((error: Error) => {
        console.log(
          'There was a problem getting the data: ' +
            error.name +
            ' ' +
            error.message
        );
        console.log(error.stack);
      });
  }

  render() {
    return (
      <VictoryPie
        data={this.state.data}
        x={d => d.category}
        y={d => d.value}
      />
    );
  }
}

export default StatsColumn;
