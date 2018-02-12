import * as React from 'react';
import '../styles/result-list.css';
import ResultItemLink from './result-item-link';

export interface ResultListProps {
  filteredCategories: string[];
}

class ResultList extends React.Component<ResultListProps, {}> {
  constructor(props: ResultListProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.filteredCategories.length === 0
            ? 'result-list-inactive'
            : 'result-list-active'
        }
      >
        {this.props.filteredCategories.map(elem => {
          return <ResultItemLink key={elem} result={elem} />;
        })}
      </div>
    );
  }
}

export default ResultList;
