import * as React from 'react';
import '../styles/input-column.css';
import ResultList from './result-list';

export interface InputState {
  category: string;
  value: string;
}

export interface InputProps {
  categoryPlaceholder: string;
  valuePlaceholder: string;
}

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
    this.setState({
      value: event.currentTarget.value
    });
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
          <ResultList />
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
