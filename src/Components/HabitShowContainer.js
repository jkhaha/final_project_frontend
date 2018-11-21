import React, { Component } from 'react';
import Calendar from './Calendar'
import UserStats from './UserStats'

class HabitShowContainer extends Component {
  render(){
    return(
      <div>
        <Calendar/>
        <UserStats/>
      </div>
    )
  }
}

export default HabitShowContainer;
