import React, { Component } from 'react';
import UserCalendar from './UserCalendar'
import UserStats from './UserStats'
import { loadHabit } from '../store/actions/habitActions'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class HabitShowContainer extends Component {

  handleDelete=(event) => {
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
    return(
      <div>
        <NavBar/>
        <div id="habit_description">
        <h3>Description: {this.props.selectedHabit.description}</h3>
        <h3>Frequency: {this.props.selectedHabit.frequency}</h3>
        <h3>Start Date: {this.props.selectedHabit.start_date}</h3>
        <h3>Cue: {this.props.selectedHabit.cue}</h3>
        <h3>Routine: {this.props.selectedHabit.routine}</h3>
        <h3>Reward: {this.props.selectedHabit.reward}</h3>
        <p>
        <button className="ui button" type="Submit" onClick={(event)=> this.handleDelete(event)}>Delete Habit</button>
        </p>
        <p>
          <Link to="/editform">
            <button className="ui button" type="Submit">Edit Habit</button>
          </Link>
        </p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedHabit: state.habits.selectedHabit
  }
}

export default connect(mapStateToProps)(HabitShowContainer);
