import React, { Component } from 'react';
var model = require('./model');

export class Materials extends Component {
  constructor(props) {
    super(props);
    this.commodityCalc = this.commodityCalc.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const material = e.target.value;
    this.props.onChange(material);
  }

 commodityCalc(e){
    const material = e.target.value;
    model.getPrice(material);
  }


    render() {
        return (
            <div>
                <select id="materials" onChange={this.handleChange}>
                    <option value="wood">
                        Wood
          </option>

                    <option value="stone">
                        Stone
          </option>

                    <option value="metal">
                        Metal
          </option>
                </select>
         <li>
         {this.commodityCalc}
          
        </li>

            </div>
        );
    }
}



export class Button extends Component {
    render() {
        return (<button> Buy </button>);
    }
}


export class Quantity extends Component {
    render() {
        return (<input type="number" />);
    }
}

/*export class Handler extends Component {
    constructor(props) {
        super(props);
        this.commodityCalc = this.commodityCalc.bind(this);
    }
    commodityCalc(e){
        let value = e.target.value
        console.log(this.props.onChange)

      return console.log(model.getPrice(value))
        
        
    }
    render() {
    
        return (<div> {this.commodityCalc} </div>)
    }
} 
*/