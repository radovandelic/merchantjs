import React, { Component } from 'react';
import { Button, Quantity, Materials } from './interface';
import './App.css';
var model = require('./model');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      material: 'wood',
      price: 2,
      clicked: false,
      prices: {}
    };
    this.getAll = this.getAll.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
    this.ajaxGet = this.ajaxGet.bind(this);
  }
  ajaxGet(what, material, callback) {
    var url = `http://localhost:3001/${what}/${material}`
    fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log('parsed json', json)
      callback(json);
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  changeMaterial(newMaterial) {
    this.ajaxGet("price", newMaterial, newPrice => {
      this.setState({
        material: newMaterial,
        price: newPrice
      });
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

        <div>
          {this.state.clicked ? (
            <li>{priceString} </li>
          ) : (
              <p>
                Price of {this.state.material} is $ {this.state.price}
              </p>
            )}{' '}
        </div>
      </div>
    );
  }
}

export default App;
