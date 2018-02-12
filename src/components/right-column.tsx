import * as React from 'react';
import { VictoryPie } from 'victory';

export interface RightColumnProps {
  data: {
    category: string;
    value: number;
  }[];
}

export interface RightColumnState {
  
}

class RightColumn extends React.Component<RightColumnProps, RightColumnState> {
  constructor(props: RightColumnProps) {
    super(props);
  }

  render() {
    return (
      <VictoryPie data={this.props.data} x={d => d.category} y={d => d.value} />
    );
  }
}

export default RightColumn;
