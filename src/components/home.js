import React from 'react';
import logo from '../imgs/logo.svg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
