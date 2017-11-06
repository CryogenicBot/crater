import '../styles/home.css';
import * as React from 'react';
const logo = require('../imgs/logo.svg');
import { Link } from 'react-router-dom';
import CalendarBar from './calendar-bar';

function Home() {
  const monthList: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <div className="home">
      <CalendarBar months={monthList} />
      <div className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p id="para" className="home-intro">
        <Link to="/editor">Random</Link>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default Home;
