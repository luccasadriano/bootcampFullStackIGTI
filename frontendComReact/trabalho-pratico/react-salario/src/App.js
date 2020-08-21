import React, { Component } from 'react';
import InputFullSalary from './components/input/InputFullSalary';
import InputReadOnly from './components/input/InputReadOnly';
import ProgessBarSalary from './components/barra/ProgessBarSalary';
import { calculateSalaryFrom } from './components/helpers/salary';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      salary: 1,

      calculations: {
        baseINSS: 1,
        discountINSS: 1,
        baseIRPF: 1,
        discountIRPF: 1,
        netSalary: 1,
      }
    }
  }

  componentDidUpdate(_, previousState){
    const { salary: oldSalary } = previousState;
    const { salary: newsalary } = this.state;

    if (oldSalary !== newsalary) {
      const calculations = calculateSalaryFrom(this.state.number);
      this.setState({ calculations });
    }
  }

  handleInputChange = (event) => {
    const newsalary = Salary(event.target.value);
    this.setState({ number: newsalary });

    // this.setState({ number: newNumber }, () => {
    //   const calculations = getCalculationsFrom(this.state.number);
    //   this.setState({ calculations });
    // });
  };


  render() {
    return (
      <div>
        <InputFullSalary description='' value />
        <InputReadOnly />
        <ProgessBarSalary />
      </div>
    )
  }
}
