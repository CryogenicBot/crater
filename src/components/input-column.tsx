import * as React from 'react';
import '../styles/input-column.css';

export interface InputState {
  category: string;
  value: number;
}

class InputColumn extends React.Component<{}, InputState> {
  constructor() {
    super();
    this.state = {
      category: 'Food',
      value: 50.0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      value: parseFloat(event.currentTarget.value)
    });
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>
        <label className="labels">
          Where?
          <input
            className="inputs"
            type="text"
            value={this.state.category}
            onChange={this.handleChange}
          />
        </label>
        <label className="labels">
          How much?
          <input
            className="inputs"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputColumn;
