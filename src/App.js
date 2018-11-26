import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardContainer from './Components/DashboardContainer'
import HabitShowContainer from './Components/HabitShowContainer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <SignUp/>
      <Route path='/login' component={Login}/>
      <DashboardContainer/>
      <HabitShowContainer/>

    </div>
  </Router>
    );
  }
}

export default App;
