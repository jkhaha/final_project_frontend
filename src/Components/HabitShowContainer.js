import React, { Component } from 'react';
import UserCalendar from './UserCalendar'
import UserStats from './UserStats'
import { loadHabit } from '../store/actions/habitActions'
import { connect } from 'react-redux'

class HabitShowContainer extends Component {

  componentDidMount(){
    this.props.loadHabit()
  }

  render(){
    return(
      <div>
        Test
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHabit: () => dispatch(loadHabit())
  }
}

export default connect(null, mapDispatchToProps)(HabitShowContainer);
