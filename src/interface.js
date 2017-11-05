import React from 'react';
import ReactDOM from 'react-dom';

export class Materials extends React.Componet{
render(){
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



export class Button extends React.Componet{
render(){
    return <button> </button>
    }
}


export class Quantity extends React.Componet{
    render(){
             return <input type="number" />
    } 
}