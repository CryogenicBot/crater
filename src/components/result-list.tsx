import * as React from 'react';
import '../styles/result-list.css';
import ResultItemLink from './result-item-link';

export interface ResultListProps {
  results: string[];
  categoryText: string;
}

class ResultList extends React.Component<ResultListProps, {}> {
  constructor(props: ResultListProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.categoryText !== '' ? 'result-list-active' : 'result-list-inactive'}>
        {this.props.results.map(elem => {
          if (this.props.categoryText !== '') {
            if (
              elem
                .toLowerCase()
                .startsWith(this.props.categoryText.toLowerCase())
            ) {
              return <ResultItemLink key={elem} result={elem} />;
            } else {
              return null;
            }
          }
          return <ResultItemLink key={elem} result={elem} />;
        })}
      </div>
    );
  }
}

export default ResultList;
