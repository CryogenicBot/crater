import * as React from 'react';
import '../styles/input-table.css';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import { SearchResultProps, SearchProps, SearchResultData } from 'semantic-ui-react';
// import ResultListLink from './result-list-link';
// import CalendarBar from './calendar-bar';

export interface InputTableState {
  isLoading: boolean;
  value: string | undefined;
  results: SearchResultProps[];
}
/*
export interface InputProps {
  categoryPlaceholder: string;
  valuePlaceholder: string;
  selectedCategory: string;
  changeCategoryText: Function;
  submitData: Function;
  monthList: string[];
}
*/

const source: string[] = ['Food', 'Car', 'Phone'];

class InputTable extends React.Component<{}, InputTableState> {
  constructor(props: {}) {
    super(props);
    this.state = { isLoading: false, results: [], value: '' };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.handleMoneyChange = this.handleMoneyChange.bind(this);
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (
    event: React.MouseEvent<HTMLDivElement>,
    data: SearchResultData
  ) => {
    console.log(data.result.title);
    this.setState({ value: data.result.title });
  }

  handleSearchChange = (
    event: React.MouseEvent<HTMLElement>,
    data: SearchProps
  ) => {
    this.setState({ isLoading: true, value: data.value });
    setTimeout(() => {
      if (this.state.value !== undefined && this.state.value.length < 1) {
        return this.resetComponent();
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result: string) => re.test(result);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch).map((item: string) => {return {title: item}; })
      });
    }, 0);
  };

  render() {
    const { isLoading, value, results } = this.state;
    console.log(results);
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

// handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//   event.preventDefault();
//   this.props.submitData(this.state.category, parseFloat(this.state.value));
// }

// handleCategoryChange(event: React.FormEvent<HTMLInputElement>) {
//   this.setState({
//     category: event.currentTarget.value
//   });
//   this.props.changeCategoryText(event.currentTarget.value);
// }

// handleMoneyChange(event: React.FormEvent<HTMLInputElement>) {
//   let strNum: string = event.currentTarget.value;
//   if (strNum.length <= 10) {
//     if (strNum === '') {
//       this.setState({ value: '' }); // initial state
//     } else {
//       if (strNum === '0' || strNum === '0.0' || strNum === '0.00') {
//         this.setState({ value: '' });
//       } else {
//         strNum = strNum.replace('.', '');
//         let num: number = parseFloat(strNum);
//         if (num === undefined || num === null || isNaN(num)) {
//           this.setState({ value: '' });
//         } else {
//           strNum = (num / 100).toFixed(2);
//           this.setState({ value: strNum });
//         }
//       }
//     }
//   }
// }

export default InputTable;
