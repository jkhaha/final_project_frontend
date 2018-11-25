import React, { Component } from 'react';
import ToDo from './ToDo'
import HabitBoards from './HabitBoards'

class DashboardContainer extends Component {



  render() {
    return(
      <div>
      <ToDo/>
      <HabitBoards/>
      </div>
    )
  }
}

export default DashboardContainer;
