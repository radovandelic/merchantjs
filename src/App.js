import React, { Component } from 'react';
import { Button, Quantity, Materials, Handler } from './interface';
import './App.css';
import { model } from './model';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { material: 'wood' };

    this.changeMaterial = this.changeMaterial.bind(this);
  }

  changeMaterial(newMaterial) {
    this.setState({
      material: newMaterial
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Medival Villge</h1>
        </header>
        <p className="App-intro">
          To get started, choose what material to buy
          <Materials onChange={this.changeMaterial} />
          <Quantity />
          <Button />
        </p>
        <br />
        <li>
          {' '}
          Price of {this.state.material} is <Handler />{' '}
        </li>
      </div>
    );
  }
}

export default App;
