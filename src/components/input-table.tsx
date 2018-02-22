import * as React from 'react';
import { connect } from 'react-redux';
import {
  Search,
  Input,
  Label,
  Button,
  Icon,
  SearchResultProps,
  SearchProps,
  SearchResultData,
  Segment,
  Divider,
  // Item
} from 'semantic-ui-react';
import _ from 'lodash';
import { Dispatch, AnyAction } from 'redux';
import { submitData } from '../actions';
import { AppState, BudgetData } from './app-root';

import '../styles/input-table.css';

// import ResultListLink from './result-list-link';
// import CalendarBar from './calendar-bar';

interface InputTableState {
  isLoading: boolean;
  value: string | undefined;
  results: SearchResultProps[];
  budgetAmt: number | string;
}

interface InputTableProps {
  submitData: Function;
  categories: string[];
  data: BudgetData[];
}

class InputTable extends React.Component<InputTableProps, InputTableState> {
  constructor(props: InputTableProps) {
    super(props);
    this.state = { isLoading: false, results: [], value: '', budgetAmt: '' };
  }

  componentWillMount() {
    this.resetComponent();
  }

  handleBudgetChange = (event: React.FormEvent<HTMLInputElement>) => {
    let amount: string = event.currentTarget.value;
    if (amount === '') {
      this.setState({ budgetAmt: '' });
    } else {
      this.setState({ budgetAmt: parseFloat(event.currentTarget.value) });
    }
  };

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '', budgetAmt: '' });

  handleResultSelect = (
    event: React.MouseEvent<HTMLDivElement>,
    data: SearchResultData
  ) => {
    this.setState({ value: data.result.title });
  };

  handleSearchChange = (
    event: React.MouseEvent<HTMLElement>,
    data: SearchProps
  ) => {
    let value = data.value;
    this.setState({ isLoading: true, value: value });
    if (value !== undefined && value.length < 1) {
      return this.resetComponent();
    }

    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = (result: string) => re.test(result);

    this.setState({
      isLoading: false,
      results: _.filter(this.props.categories, isMatch).map((item: string) => {
        return { title: item };
      })
    });
  };

  handleSubmit = () => {
    this.props.submitData(
      this.state.value,
      parseFloat(this.state.budgetAmt.toString())
    );
    this.resetComponent();
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <div>
        <div id="input-table-container">
          <Search
            className="search-bar"
            id="search-bar"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
          />
          <Button id="add-button" icon={true}>
            <Icon name="plus" />
          </Button>
          <Input
            className="input-bar"
            id="input-bar"
            labelPosition="right"
            type="number"
            placeholder="Amount"
            step={10}
            onChange={this.handleBudgetChange}
            value={this.state.budgetAmt}
          >
            <Label basic={true}>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
          <Button
            id="submit-button"
            icon={true}
            color="vk"
            onClick={this.handleSubmit}
          >
            <Icon name="angle double right" />
          </Button>
        </div>
        <Segment id="data-table">
          {this.props.data.map((item: BudgetData) => {
            return <div>
            <span>{item.category}</span>
            <span>{item.value}</span>
            <Divider horizontal={true} />
            </div>
          })}
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    categories: state.categories,
    data: state.data
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  let props: { submitData: Function } = {
    submitData: (category: string, value: number) => {
      dispatch(submitData(category, value));
    }
  };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTable);
