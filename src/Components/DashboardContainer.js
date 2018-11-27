import React, { Component } from 'react';
import ToDo from './ToDo'
import HabitBoards from './HabitBoards'

class DashboardContainer extends Component {
  functionForConsoleLog() {
    console.log()
  }
  render() {
    this.functionForConsoleLog()
    return(
      <div>
      <ToDo/>
      <HabitBoards/>
      </div>
    )
  }
}

export default DashboardContainer;
