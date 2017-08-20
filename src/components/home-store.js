import { connect } from 'react-redux';
import Home from './home';

function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
}

const HomeStore = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeStore;
