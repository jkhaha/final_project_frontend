import React, { Component } from 'react';
import ToDo from './ToDo'
import HabitBoards from './HabitBoards'
import NavBar from './NavBar'
import { connect } from 'react-redux'

class DashboardContainer extends Component {

  render() {

    return(
      <div>
      <NavBar/>
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <ToDo/>
          </div>
          <div className="column">
            <HabitBoards/>
          </div>
        </div>
          <div className="ui vertical divider">
            AND
          </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(DashboardContainer)
