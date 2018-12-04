import React, { Component } from 'react';
import UserCalendar from './UserCalendar'
import UserStats from './UserStats'
import { loadHabit } from '../store/actions/habitActions'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class HabitShowContainer extends Component {
  handleDelete=(event) => {
    console.log('inside handle delete')
    let options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
      fetch(`http://localhost:3001/habits/${this.props.selectedHabit.id}`, options)
  }

  render(){
    console.log(this.props.selectedHabit.start_date);
    return(
      <div>
        <NavBar/>
        <Link to='/dashboard'>
          <button className="ui button" type="Submit" onClick={(event)=> this.handleDelete(event)}>Delete Habit</button>
        </Link>
        <h3>Description: {this.props.selectedHabit.description}</h3>
        <h3>Frequency: {this.props.selectedHabit.frequency}</h3>
        <h3>Start Date: {this.props.selectedHabit.start_date}</h3>
        <h3>Cue: {this.props.selectedHabit.cue}</h3>
        <h3>Routine: {this.props.selectedHabit.routine}</h3>
        <h3>Reward: {this.props.selectedHabit.reward}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    selectedHabit: state.habits.selectedHabit
  }
}

export default connect(mapStateToProps)(HabitShowContainer);
