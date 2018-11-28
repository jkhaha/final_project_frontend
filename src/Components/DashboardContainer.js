import React, { Component } from 'react';
import ToDo from './ToDo'
import HabitBoards from './HabitBoards'
import NavBar from './NavBar'
import { connect } from 'react-redux'

class DashboardContainer extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
      <NavBar/>

      <ToDo/>
      <HabitBoards/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(DashboardContainer)
