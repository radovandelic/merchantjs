import React, { Component } from 'react';
import { Button, Quantity, Materials } from './interface';
import './App.css';
var model = require('./model');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { material: 'wood', price: model.getPrice('wood') };

    this.changeMaterial = this.changeMaterial.bind(this);
  }

  changeMaterial(newMaterial) {
    this.setState({
      material: newMaterial,
      price: model.getPrice(newMaterial)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Medieval Village</h1>
        </header>
        <p className="App-intro">
          To get started, choose what material to buy
          <Materials onChange={this.changeMaterial} />
          <Quantity />
          <Button />
        </p>
        <br />
<<<<<<< HEAD
=======
        <li>
          Price of {this.state.material} is {this.state.price}
        </li>
>>>>>>> 4181f0ba8e453777e34ee9110951c3eba163a2e1
      </div>
    );
  }
}

export default App;
