import React, { Component } from 'react';
import { Button, Quantity, Materials } from './interface';
import './App.css';
var model = require('./model');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      material: 'wood',
      price: model.getPrice('wood'),
      clicked: false,
      prices: {}
    };
    this.getAll = this.getAll.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
  }

  changeMaterial(newMaterial) {
    this.setState({
      material: newMaterial,
      price: model.getPrice(newMaterial)
    });
  }
  getAll() {
    const prices = model.getAll();
    if (this.state.clicked === false) {
      this.setState({ clicked: true, prices: prices });
    } else {
      this.setState({ clicked: false, prices: prices });
    }
  }

  render() {
    const prices = model.getAll();
    let priceString = JSON.stringify(prices);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Medieval Village</h1>
        </header>
        <div className="App-intro">
          To get started, choose what material to buy
          <Materials onChange={this.changeMaterial} />
          <Quantity />
          <Button />
          <button onClick={this.getAll}>Toggle Prices </button>
        </div>
        <br />
        <p>
          Price of {this.state.material} is $ {this.state.price}
        </p>
        <div>{this.state.clicked ? <li>{priceString} </li> : null} </div>
      </div>
    );
  }
}

export default App;
