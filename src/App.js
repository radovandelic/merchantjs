import React, { Component } from 'react';
import { Button, Materials, Towns } from './interface';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTown: 'icekeep',
      market: [],
      clicked: false,
      username: 'user',
      inventory: [],
      money: 100,
      currentCommodity: {}
    };
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.setNewPrice = this.setNewPrice.bind(this);
    this.getAll = this.getAll.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
    this.ajaxGet = this.ajaxGet.bind(this);
  }
  componentDidMount() {
    this.getAll();
  }
  setNewPrice(price) {
    price = price + (Math.random() * price - Math.random() * price) / 10;
    return price;
  }
  nextDay() {
    var newPrices = [];
    console.log(this.state.market);
    for (var i = 0; i < this.state.market.length; i++) {
      const material = this.state.market[i];
      material.price = this.setNewPrice(material.price);
      newPrices.push(material);
    }
    this.setState({
      market: newPrices
    });
  }
  buy() {
    var inventory = this.state.inventory;
    var index = inventory.findIndex(c => { return c.material === this.state.currentCommodity.material });

    if (index == -1) { // if item not already in inventory
      var commodity = this.state.currentCommodity;
      var price = commodity.price;
      commodity.quantity = 1;
      inventory.push(commodity);
    } else { // if item already in inventory
      var price = this.state.currentCommodity.price;
      inventory[index].quantity++;
    }

    var money = this.state.money - price;
    if (money >= 0) {
      this.setState({
        inventory: inventory,
        money: money
      })
    }
  }
  sell() {
    var inventory = this.state.inventory;
    var index = inventory.findIndex(c => { return c.material == this.state.currentCommodity.material });
    if (index != -1 && inventory[index].quantity > 0) {
      var price = this.state.currentCommodity.price
      var money = this.state.money + price;
      inventory[index].quantity--;
      this.setState({
        inventory: inventory,
        money: money
      })
    }
  }
  ajaxGet(town, callback) {
    var url = `http://localhost:3001/${town}/prices`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log('parsed json', json);
        callback(json);
      })
      .catch(function (ex) {
        console.log('parsing failed', ex);
      });
  }
  changeMaterial(newMaterial) {
    var currentCommodity = this.state.market.find(c => { return c.material === newMaterial })
    this.setState({
      currentCommodity: currentCommodity
    });
  }
  getAll() {
    this.ajaxGet(this.state.currentTown, data => {
      if (data) {
        console.log(data);
        console.log(data.name);
        // to take a arg use data.[name]
        //console.log(data.market[0]);
        console.log(data.market[0].material);
        console.log(data.market[0].price);
        //console.log(data.market.length);
        this.setState({ currentTown: 'icekeep', market: data.market, currentCommodity: data.market[0] });
        console.log(this.state.market);
        console.log(this.state.market.length);
        // return allPrices();
      } else {
        console.log('error');
      }
    });
  }
  getInventory() { }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Medieval Village</h1>
        </header>
        <div className="row">
          {/* This container holds the user information  */}
          <div className="col-sm-3 card">
            Username: user
            <br />
            Money: {this.state.money.toFixed(2)}
            <br />
            Inventory:
            <ul>
              {this.state.inventory.map(inventoryItem =>
                <li> {inventoryItem.material} qty: {inventoryItem.quantity} </li>
              )}
            </ul>
          </div>
          {/* This container is to buy goods */}
          <div className="App-intro col-sm-6">
            To get started, choose what material to buy
            <Materials onChange={this.changeMaterial} />
            <button onClick={this.buy}> Buy </button>
            <button onClick={this.sell}> Sell </button>
          </div>
          {/* This container shows all items in a given location */}
          <div className="col-sm-3 card">
            <div>
              <Towns onChange={this.changeMaterial} />
              {/* <button onClick={this.getAll}> see all </button> */}
              <button onClick={this.nextDay}> Next Day </button>{' '}
              {this.state.market.map(item => (
                <li>
                  {item.material} {item.price.toFixed(2)}{' '}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
