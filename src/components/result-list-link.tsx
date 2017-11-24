import { connect } from 'react-redux';
import ResultList from './result-list';
import { AppState } from './app-root';

function mapStateToProps(state: AppState) {
  return {
    categoryText: state.category.categoryText,
  };
}

const ResultListLink = connect(mapStateToProps)(ResultList);

export default ResultListLink;
