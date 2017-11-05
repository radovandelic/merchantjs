import React, { Component } from 'react';
import { model } from './model';

export class Materials extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const material = e.target.value;
        this.props.onChange(material);
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

export class Handler extends Component {
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