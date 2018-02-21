import * as React from 'react';
import {
  Card,
  Input,
  Label,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../styles/setup.css';

interface SetupState {
  budgetAmt: number | string;
}

// let budgetAmt: HTMLInputElement | null = null;

class Setup extends React.Component<{}, SetupState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      budgetAmt: ''
    };
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  handleBudgetChange(event: React.FormEvent<HTMLInputElement>) {
    let amount: string = event.currentTarget.value;
    if (amount === '') {
      this.setState({ budgetAmt: '' });
    } else {
      this.setState({ budgetAmt: parseFloat(event.currentTarget.value) });
    }
  }

  render() {
    return (
      <div className="setup-card">
        <Card raised={true}>
          <Card.Content>
            How much do you want to budget?
            <div className="budget-input">
              <Input
                labelPosition="right"
                type="number"
                placeholder="Amount"
                step={1000}
                onChange={this.handleBudgetChange}
                value={this.state.budgetAmt}
              >
                <Label basic={true}>$</Label>
                <input />
                <Label>.00</Label>
              </Input>
            </div>
            <div className="budget-button">
              <Link
                to={{
                  pathname: '/budget/' + this.state.budgetAmt
                }}
              >
                <Button primary={true} size="medium" floated="right">
                  Budget
                </Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Setup;
