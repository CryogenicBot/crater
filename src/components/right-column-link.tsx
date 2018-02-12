import { connect } from 'react-redux';
import RightColumn from './right-column';
import { AppState } from './app-root';

function mapStateToProps(state: AppState) {
  return {
    data: state.data,
  };
}

const RightColumnLink = connect(mapStateToProps)(RightColumn);

export default RightColumnLink;
