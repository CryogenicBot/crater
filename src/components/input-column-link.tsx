import { connect } from 'react-redux';
import InputColumn from './input-column';
import { AppState } from './app-root';
import { Dispatch, AnyAction } from 'redux';
import { changeCategoryText } from '../actions';
import { submitData } from '../actions';

function mapStateToProps(state: AppState) {
  return {
    selectedCategory: state.category.selectedCategory
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  let props: { changeCategoryText: Function; submitData: Function } = {
    changeCategoryText: (category: string) => {
      dispatch(changeCategoryText(category));
    },
    submitData: (category: string, value: number) => {
      dispatch(submitData(category, value));
    }
  };
  return props;
}

const InputColumnLink = connect(mapStateToProps, mapDispatchToProps)(
  InputColumn
);

export default InputColumnLink;
