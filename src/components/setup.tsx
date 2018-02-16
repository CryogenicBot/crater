import * as React from 'react';

class Setup extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="setup-container">
        What is your yearly salary?
        <input type="number"/>
        {/* <div className="left-column">
          <InputColumnLink
            categoryPlaceholder={'What did you spend your money on?'}
            valuePlaceholder={'How much did you spend?'}
            monthList={this.props.monthList}
          />
        </div>
        <div className="right-column">
          <RightColumnLink />
        </div> */}
      </div>
    );
  }
}

export default Setup;
