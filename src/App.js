import React, { Component } from 'react';
import './App.css';
import DashboardContainer from './Components/DashboardContainer'
import HabitShowContainer from './Components/HabitShowContainer'
import Login from './Components/Login'
import TestComponent from './Components/TestComponent'


class App extends Component {
  render() {
    return (
      <div>
      <Login/>
      <DashboardContainer/>
      <HabitShowContainer/>
      <TestComponent/>
    </div>
    );
  }
}

export default App;
