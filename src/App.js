import React, { Component } from 'react';
import { Button, Quantity, Materials } from './interface';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Medival Villge</h1>
        </header>
        <p className="App-intro">
          To get started, choose what material to buy
          <Materials /><Quantity /><Button />
        </p>
      </div>
    );
  }
}

export default App;
