import React from 'react';
import logo from '../imgs/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="home-intro">
        <Link to="/editor" />
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
