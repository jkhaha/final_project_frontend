import React, { Component } from 'react';
import HabitBoards from './HabitBoards'
import NavBar from './NavBar'
import { connect } from 'react-redux'

class DashboardContainer extends Component {

  render() {

    return(
      <div>
      <NavBar/>
      <h1 id="your_habits"> Here are the habits you are working on, {this.props.username}:</h1>
        <div id="dashboard">
          <HabitBoards/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(DashboardContainer)
