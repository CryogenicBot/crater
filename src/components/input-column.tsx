import * as React from 'react';
import '../styles/input-column.css';
import ResultList from './result-list';
import { ResultListProps } from './result-list';

export interface InputState {
  category: string;
  value: string;
}

export interface InputProps {
  categoryPlaceholder: string;
  valuePlaceholder: string;
  selectedCategory: string;
}

const results: ResultListProps = {
  results: [
    'Food', 
    'Utilities', 
    'Other',
    'Entertainment',
    'Example',
    'Example2',
    'Example3',
    'Example4',
    'Example2',
    'Example2',
    'Example2',
  ]
};

class InputColumn extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      category: '',
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleCategoryChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      category: event.currentTarget.value
    });
  }

  handleMoneyChange(event: React.FormEvent<HTMLInputElement>) {
    let strNum: string = event.currentTarget.value;
    if (strNum.length <= 10) {
      if (strNum === '') {
        this.setState({ value: '' }); // initial state
      } else {
        if (strNum === '0' || strNum === '0.0' || strNum === '0.00') {
          this.setState({ value: '' });
        } else {
          strNum = strNum.replace('.', '');
          let num: number = parseFloat(strNum);
          if (num === undefined || num === null || isNaN(num)) {
            this.setState({ value: '' });
          } else {
            strNum = (num / 100).toFixed(2);
            this.setState({ value: strNum });
          }
        }
      }
    }
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>
        <label className="labels">
          Where?
          <input
            name="categorySpentIn"
            className="inputs"
            type="text"
            value={this.state.category}
            placeholder={this.props.categoryPlaceholder}
            onChange={this.handleCategoryChange}
          />
          <ResultList {...results}/>
        </label>
        <label className="labels">
          How much?
          <input
            name="moneySpent"
            className="inputs"
            type="text"
            value={this.state.value}
            placeholder={this.props.valuePlaceholder}
            onChange={this.handleMoneyChange}
          />
        </label>
        <input className="submit-button" type="submit" value="SUBMIT" />
      </form>
    );
  }
}

export default InputColumn;
