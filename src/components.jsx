import React, { Component } from 'react';

export class Button extends Component {
    render() {
        return (
            <button onClick={this.props.clicked} > {this.props.text} </button>
        );
    }
}

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
                    <option value="wood">Wood</option>

                    <option value="stone">Stone</option>

                    <option value="steel">Steel</option>
                </select>
            </div>
        );
    }
}