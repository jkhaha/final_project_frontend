import React from "react";
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../store/actions/userActions'

class Navbar extends Component {

  handleClick = (event) => {
    localStorage.removeItem("token")
    // this.props.logoutUser(event)
  }

  render(){

  return (
    <div className="ui three item menu">
      <a className= "item">
        <Link to='/habitform'> Create A Habit </Link>
      </a>
      <a className="item">
        <Link to='/dashboard'> Today's Habit </Link>
      </a>
      <a className="item">
        <Link to='/login'> Logout </Link>
      </a>
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
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
