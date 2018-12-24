import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesTemplate from './moviestemplate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MoviesTemplate />
        </header>
      </div>
    );
  }
}

export default App;
