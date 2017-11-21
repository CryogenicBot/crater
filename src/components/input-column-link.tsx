import { connect } from 'react-redux';
import InputColumn from './input-column';
import { AppState } from './app-root';

function mapStateToProps(state: AppState) {
  return {
    selectedCategory: state.selectedCategory
  };
}

const InputColumnLink = connect(mapStateToProps)(InputColumn);

export default InputColumnLink;
