import React, { Component } from 'react';

export class Materials extends Component {
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