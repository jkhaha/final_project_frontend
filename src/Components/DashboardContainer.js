import React, { Component } from 'react';
import ToDo from './ToDo'
import HabitBoards from './HabitBoards'
import NavBar from './NavBar'

class DashboardContainer extends Component {
  functionForConsoleLog() {
    console.log()
  }
  render() {
    this.functionForConsoleLog()
    return(
      <div>
      <NavBar/>
      <ToDo/>
      <HabitBoards/>
      </div>
    )
  }
}

export default DashboardContainer;
