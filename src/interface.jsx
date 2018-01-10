import React, { Component } from 'react';
import { Button, Materials } from './components.jsx'
import { connect } from 'react-redux';
import { changeTown, changeMaterial } from './actions';

export class Header extends Component {
  render() {

    return (<header className="App-header">
      <h1 className="App-title">{this.props.title}</h1>
    </header>);
  }
}

export class Main extends Component {
  render() {
    return (
      <div className="App-intro col-sm-6">
        To get started, choose what material to buy
        <Materials onChange={this.props.changeMaterial} />
        <Button clicked={this.props.buy} text="Buy" />
        <Button clicked={this.props.sell} text="Sell" />
      </div>
    );
  }
}

export class Market extends Component {
  render() {
    return (<div className="col-sm-3 card">
      <div>
        <Towns onChange={this.props.changeMaterial} />
        <Button clicked={this.props.nextDay} text="Next Day" />
        {this.props.market.map(item => (
          <li>
            {item.material} {item.price.toFixed(2)}{' '}
          </li>
        ))}
      </div>
    </div>
    )
  }
}
export class Inventory extends Component {
  render() {
    const { currentTown } = this.props
    return (<div className="col-sm-3 card">
      {/* Current Town: {currentTown} */}
      <br />
      Money: {this.props.money.toFixed(2)}
      <br />
      Inventory:
    <ul>
        {this.props.inventory.map(inventoryItem =>
          <li> {inventoryItem.material} qty: {inventoryItem.quantity} </li>
        )}
      </ul>
    </div>
    );
  }
}

export class Towns extends Component {
  render = () => {
    const { changeTown } = this.props;
    let town = "icekeep";
    return (
      <div>
        <select defaultValue="icekeep" id="materials" onChange={e => {
          town = e.target.value;
          changeTown(town)
        }}>
          <option value="bayhollow">Bayhollow</option>
          <option value="boulderspire">Boulderspire</option>
          <option value="grimshield"> Grimshield</option>
          <option value="icekeep">Icekeep</option>
          <option value="quickwater">Quickwater</option>
          <option value="thorngarde">Thorngarde</option>
        </select>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    currentTown: state.currentTown
  }
}

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  changeTown(town) {
    dispatch({
      type: "CHANGE_TOWN",
      town
    })
  }
})

// Connected Components
Inventory = connect(
  mapStateToProps,
  null
)(Inventory)

Towns = connect(
  null,
  mapDispatchToProps
)(Towns);

