import React, { Component } from 'react'

export default class InputFullSalary extends Component {
   render() {
      return (
         <div>
         <label>
         <span>Número: </span>
         <input
           type='number'
           value={number}
           onChange={this.handleInputChange}
         />
       </label>
       </div>
      )
   }
}
