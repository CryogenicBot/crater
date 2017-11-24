import * as React from 'react';
import '../styles/result-item.css';

export interface ResultItemProps {
  result: string;
  chooseCategory: Function;
}

class ResultItem extends React.Component<ResultItemProps, {}> {
  constructor(props: ResultItemProps) {
    super(props);
  }

  render() {
    return (
      <p
        onClick={() => this.props.chooseCategory(this.props.result)}
        className="result-item"
      >
        {this.props.result}
      </p>
    );
  }
}

export default ResultItem;
