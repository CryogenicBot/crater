import * as React from 'react';
import '../styles/result-list.css';
import ResultItem from './result-item';

export interface ResultListProps {
  results: string[];
}

class ResultList extends React.Component<ResultListProps, {}> {
  constructor(props: ResultListProps) {
    super(props);
  }

  render() {
    return (
      <div className="result-list-active">
        {this.props.results.map(elem => {
          return <ResultItem key={elem} result={elem} />;
        })}
      </div>
    );
  }
}

export default ResultList;
