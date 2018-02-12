import * as React from 'react';
import '../styles/input-column.css';
import ResultListLink from './result-list-link';
import CalendarBar from './calendar-bar';

export interface InputState {
  category: string;
  value: string;
}

export interface InputProps {
  categoryPlaceholder: string;
  valuePlaceholder: string;
  selectedCategory: string;
  changeCategoryText: Function;
  submitData: Function;
  monthList: string[];
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
    this.props.submitData(this.state.category, parseFloat(this.state.value));
  }

  handleCategoryChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      category: event.currentTarget.value
    });
    this.props.changeCategoryText(event.currentTarget.value);
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
      <div>
        <CalendarBar months={this.props.monthList} />
        <form className="input-form" onSubmit={this.handleSubmit}>
          <label className="labels">
            Where?
            <input
              name="categorySpentIn"
              className="inputs"
              type="text"
              value={
                this.props.selectedCategory !== ''
                  ? this.props.selectedCategory
                  : this.state.category
              }
              placeholder={this.props.categoryPlaceholder}
              onChange={this.handleCategoryChange}
              autoComplete={'off'}
            />
            <ResultListLink />
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
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputColumn;
