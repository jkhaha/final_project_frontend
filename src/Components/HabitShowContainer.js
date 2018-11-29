import React, { Component } from 'react';
import UserCalendar from './UserCalendar'
import UserStats from './UserStats'

class HabitShowContainer extends Component {
  render(){
    return(
      <div>
        <UserCalendar/>
        <UserStats/>
      </div>
    )
  }
}

export default HabitShowContainer;
