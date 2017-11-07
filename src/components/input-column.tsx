import * as React from 'react';
import '../styles/input-column.css';

export interface InputState {
  category: string;
  value: number;
}

export interface InputProps {
  categoryPlaceholder: string;
  valuePlaceholder: number;
}

class InputColumn extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      category: '',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    switch (event.currentTarget.name) {
      case 'categorySpentIn':
        this.setState({
          category: event.currentTarget.value
        });
        break;
      case 'moneySpent':
        this.setState({
          value: parseFloat(event.currentTarget.value)
        });
        break;
      default:
        this.setState({});
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
            onChange={this.handleChange}
          />
        </label>
        <label className="labels">
          How much?
          <input
            name="moneySpent"
            className="inputs"
            type="text"
            value={this.state.value}
            placeholder={this.props.valuePlaceholder.toFixed(2).toString()}
            onChange={this.handleChange}
          />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputColumn;
