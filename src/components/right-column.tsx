import * as React from 'react';
import { VictoryPie } from 'victory';
import { connect } from 'react-redux';
import { AppState } from './app-root';

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
      <VictoryPie colorScale="qualitative" data={this.props.data} x={d => d.category} y={d => d.value} />
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(RightColumn);
