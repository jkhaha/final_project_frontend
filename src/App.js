import React, { Component } from 'react';
import './App.css';
import DashboardContainer from './Components/DashboardContainer'
import HabitShowContainer from './Components/HabitShowContainer'
import Login from './Components/Login'

class App extends Component {
  render() {
    return (
      <div>
      <Login/>
      <DashboardContainer/>
      <HabitShowContainer/>
    </div>
    );
  }
}

export default App;
