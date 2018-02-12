import { connect } from 'react-redux';
import ResultList from './result-list';
import { AppState } from './app-root';

function mapStateToProps(state: AppState) {
  return {
    filteredCategories: state.category.filteredCategories
  };
}

const ResultListLink = connect(mapStateToProps)(ResultList);

export default ResultListLink;
