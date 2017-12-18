import * as React from 'react';
import { VictoryPie } from 'victory';
import { Slice } from 'victory-core';

export interface StatsProps {
  data: any;
}

// const data = [
//   { x: 1, y: 1, label: 'Food' },
//   { x: 2, y: 2, label: 'Entertainment' },
//   { x: 3, y: 3, label: 'Utilities' }
// ];

class StatsColumn extends React.Component<StatsProps, {}> {
  constructor(props: StatsProps) {
    super(props);
  }

  render() {
    return <VictoryPie data={this.props.data} dataComponent={<Slice />} />;
  }
}

export default StatsColumn;
