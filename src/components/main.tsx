import '../styles/main.css';
import * as React from 'react';
import RightColumn from './right-column';
import InputTable from './input-table';

class Main extends React.Component<{}, {}> {
  
  render() {
    return (
      <div className="content-container">
        <div className="left-column">
          <InputTable />
        </div>
        <div className="right-column">
          <RightColumn />
        </div>
      </div>
    );
  }
}

export default Main;
