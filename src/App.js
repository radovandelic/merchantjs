import React, { Component } from 'react';
import { Button, Materials, Towns } from './interface';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTown: 'icekeep',
      market: [{ material: 'wood', price: 0 }],
      clicked: false,
      username: 'user',
      inventory: ['wood'],
      money: 400,
      material: 'wood'
    };
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.setNewPrice = this.setNewPrice.bind(this);
    this.getAll = this.getAll.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
    this.ajaxGet = this.ajaxGet.bind(this);
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
      console.log(material);
      material.price = this.setNewPrice(material.price);
      console.log(material.price);
      newPrices.push(material);
    }
    this.setState({
      market: newPrices
    });
    console.log(newPrices);
    console.log(this.state.market);
  }
  buy(commodity) {
    // var debit = money-market[commodity].price
    //inventory.push(commodity)
    // this.setState({money: debit})
  }
  sell() {
    //var credit = money+market[commodity].price
  }
  ajaxGet(town, callback) {
    var url = `http://localhost:3001/${town}/prices`;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log('parsed json', json);
        callback(json);
      })
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }
  changeMaterial(newMaterial) {
    this.setState({
      material: newMaterial
    });
    setTimeout(() => {
      console.log(this.state.material);
    }, 200);
  }
  getAll() {
    this.ajaxGet('icekeep', data => {
      if (data) {
        console.log(data);
        console.log(data.name);
        // to take a arg use data.[name]
        //console.log(data.market[0]);
        console.log(data.market[0].material);
        console.log(data.market[0].price);
        //console.log(data.market.length);
        this.setState({ currentTown: 'icekeep', market: data.market });
        console.log(this.state.market);
        console.log(this.state.market.length);
        // return allPrices();
      } else {
        console.log('error');
      }
    });
  }
  getInventory() {}

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
            Money: {this.state.money}
            <br />
            Inventory:
            {this.state.inventory.map((inventory, i) => <li> {inventory} </li>)}
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
              <button onClick={this.getAll}> see all </button>
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
