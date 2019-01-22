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
    <div className="is-this-it">

    <div className="dropdown" id="navbar">
      <div>
      <button className="dropbtn">
        <i className="bars icon"></i>
      </button>
      <div className="dropdown-content">
      <div className= "header item">
        <Link to='/about_us'> ABOUT US </Link>
      </div>
      <div className= "item">
        <Link to='/habitform'> CREATE A HABIT </Link>
      </div>
      <div className="item">
        <Link to='/dashboard'> MY HABITS  </Link>
      </div>
      <div className="item">
        <Link to='/login'> LOGOUT </Link>
      </div>
      </div>
      </div>
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
