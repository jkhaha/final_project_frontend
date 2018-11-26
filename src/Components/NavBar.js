import React from "react";
import { Component } from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
  render(){

  return (
    <div className="ui three item menu">
      <a href="habitform"className="item">Create A Habit</a>
      <a href="dashboard" className="active item">Today's Habits</a>
      <a href="login"className="item">Logout</a>
    </div>
  );
}
}

export default Navbar;
