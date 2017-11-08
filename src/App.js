import React, { Component } from 'react';
import { Button, Materials } from './interface';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTown: 'icekeep',
      market: [{ price: 0 }],
      clicked: false
    };
    this.getAll = this.getAll.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
    this.ajaxGet = this.ajaxGet.bind(this);
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
    this.ajaxGet('price', newMaterial, newPrice => {
      this.setState({
        material: newMaterial,
        price: newPrice
      });
    });
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

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Medieval Village</h1>
        </header>
        <div className="row">
          {/* This container holds the user information  */}
          <div className="col-sm-3 card">This is a card</div>
          {/* This container is to buy goods */}
          <div className="App-intro col-sm-6">
            To get started, choose what material to buy
            <Materials onChange={this.changeMaterial} />
            <Button />
          </div>
          {/* This container shows all items in a given location */}
          <div className="col-sm-3 card">
            <div>
              {' '}
              <button onClick={this.getAll}> see all </button>{' '}
              {this.state.market.map((market, i) => (
                <li>
                  {this.state.market[i].material} {this.state.market[i].price}{' '}
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
