import React from "react";
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { logoutUser } from '../store/actions/userActions'

class Navbar extends Component {

  handleClick = (event) => {
    localStorage.removeItem("token")
    this.props.logoutUser(event)
  }

  render(){

  return (
    <div className="ui three item menu">
      <a href="habitform" className="item">Create A Habit</a>
      <a href="dashboard" className="active item">Today's Habits</a>
      <a href="login" className="item" onClick={this.handleClick}>Logout</a>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (event) => dispatch(logoutUser(event))
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
