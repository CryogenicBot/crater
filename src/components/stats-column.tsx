import * as React from 'react';
import { VictoryPie } from 'victory';

export interface StatsProps {}

class StatsColumn extends React.Component<StatsProps, {}> {
  constructor(props: StatsProps) {
    super(props);
  }
  render() {
    return <VictoryPie />;
  }
}

export default StatsColumn;
