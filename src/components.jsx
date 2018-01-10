import React, { Component } from 'react';
import { changeTown } from './actions';
import { connect } from 'react-redux';

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

    render = () => {
        const { changeMaterial } = this.props;
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

/*
// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
    changeMaterial(material) {
        dispatch({
            type: "CHANGE_MATERIAL",
            material
        })
    }
})

// Connected Components
Materials = connect(
    null,
    mapDispatchToProps
)(Materials);*/
