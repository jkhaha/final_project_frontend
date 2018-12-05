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
    <div className="ui four item menu" id="navbar">
      <div className= "header item">
      THE COMPOUND EFFECT
      </div>
      <div className= "item">
        <Link to='/habitform'> CREATE A HABIT </Link>
      </div>
      <div className="item">
        <Link to='/dashboard'> DASHBOARD </Link>
      </div>
      <div className="item">
        <Link to='/login'> LOGOUT </Link>
      </div>
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
