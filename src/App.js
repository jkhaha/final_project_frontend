import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardContainer from './Components/DashboardContainer'
import HabitShowContainer from './Components/HabitShowContainer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HabitForm from './Components/HabitForm'
import EditForm from './Components/EditForm'
import Explanation from './Components/Explanation'

class App extends Component {

    componentDidMount(){
      if (localStorage.getItem("token") !== "undefined") {
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3001/currentuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
          }
      }
  )}
  }

  render() {
    return (
      <Router>
      <div>
      <Route path='/register' component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={DashboardContainer}/>
      <Route path='/habits' component={HabitShowContainer}/>
      <Route path='/habitform' component={HabitForm}/>
      <Route path='/editform' component={EditForm}/>
      <Route path='/about_us' component={Explanation}/>
    </div>
  </Router>
    );
  }
}

export default App;
