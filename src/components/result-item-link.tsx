import { connect } from 'react-redux';
import ResultItem from './result-item';
import { Dispatch, AnyAction } from 'redux';
import { chooseCategory } from '../actions';

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  let props: { chooseCategory: Function } = {
    chooseCategory: (category: string) => {
      dispatch(chooseCategory(category));
    }
  };
  return props;
}

const ResultItemLink = connect(null, mapDispatchToProps)(
  ResultItem
);

export default ResultItemLink;
