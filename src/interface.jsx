import React, { Component } from 'react';

export class Materials extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const material = e.target.value;
    this.props.onChange(material);
  }

  //   commodityCalc(e) {
  //     const material = e.target.value;
  //     model.getPrice(material);
  //   }

  render() {
    return (
      <div>
        <select id="materials" onChange={this.handleChange}>
          <option value="wood">Wood</option>

          <option value="stone">Stone</option>

          <option value="steel">Steel</option>
        </select>
      </div>
    );
  }
}

export class Button extends Component {
  render() {
    return (
      <button> Buy </button>
    );
  }
}

export class Towns extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const town = e.target.value;
    this.props.onChange(town);
  }
  render() {
    return (
      <div>
        <select id="materials" onChange={this.handleChange}>
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

// export class Quantity extends Component {
//   render() {
//     return <input type="number" />;
//   }
// }

// export class Iventory extends Component {}

// export class AllItems extends Component {
//   render() {
//     return (
//       <div class="row right-align">
//         <li>
//           material:&nbsp {this.props.market}
//           material:&nbsp {this.props}
//         </li>;
//       </div>
//     );
//   }
// }

/*export class Handler extends Component {
    constructor(props) {
        super(props);
        this.commodityCalc = this.commodityCalc.bind(this);
    }
    commodityCalc(props) {
        let commodity = this.props.material;
        console.log(commodity)
        return console.log(model.getPrice(commodity))


    }
    render() {

        return (<div> {this.commodityCalc} </div>)
    }
} 
*/
