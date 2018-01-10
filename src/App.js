import React, { Component } from 'react';
import { Inventory, Main, Market, Header } from './interface';
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

    var price = null;
    if (index === -1) { // if item not already in inventory
      var commodity = this.state.currentCommodity;
      price = commodity.price;
      commodity.quantity = 1;
      inventory.push(commodity);
    } else { // if item already in inventory
      price = this.state.currentCommodity.price;
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
    var index = inventory.findIndex(c => { return c.material === this.state.currentCommodity.material });
    if (index !== -1 && inventory[index].quantity > 0) {
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
    var url = window.location.hostname === "localhost" ?
      `http://localhost:3001/${town}/prices` : `https://merchantjs.herokuapp.com/${town}/prices`;
    console.log(window.location.hostname);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
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
        this.setState({
          currentTown: this.state.currentTown,
          market: data.market,
          currentCommodity: data.market[0]
        });
      }
    });
  }

  render() {
    return (
      <div className="App container">
        <Header title="Medieval Village" />
        <div className="row">

          {/* This container holds the user information  */}
          <Inventory inventory={this.state.inventory} money={this.state.money} />

          {/* This container is to buy goods */}
          <Main changeMaterial={this.changeMaterial} sell={this.sell} buy={this.buy} />

          {/* This container shows all items in a given location */}
          <Market changeMaterial={this.changeMaterial} market={this.state.market} nextDay={this.nextDay} />
        </div>
      </div>
    );
  }
}

/*const mapStateToProps = state => {
  return {
      currentMaterial: state.currentMaterial
  }
}

App = connect(
  mapStateToProps,
  null
)(App)*/

export default App;