import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import DashboardContainer from './Components/DashboardContainer'
import HabitShowContainer from './Components/HabitShowContainer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import NavBar from './Components/NavBar'
import HabitForm from './Components/HabitForm'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
      <Route path='/register' component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={DashboardContainer}/>
      <Route path='/habitboards' component={HabitShowContainer}/>
      <Route path='/habitform' component={HabitForm}/>
    </div>
  </Router>
    );
  }
}

export default App;
