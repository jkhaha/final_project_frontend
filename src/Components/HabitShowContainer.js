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

  handleCreate=(event) => {
    event.preventDefault()
    console.log(this.props.selectedHabit.id);
    let options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({entry: {
                habit_id: this.props.selectedHabit.id,
                completed_status: false,
                date_time: ''
            }})
          }
          fetch("http://localhost:3001/entries", options)
  }

  render(){
    return(
      <div>
        <NavBar/>
        <div id="habit_description">
        <p>Description: {this.props.selectedHabit.description}</p>
        <p>Frequency: {this.props.selectedHabit.frequency}</p>
        <p>Start Date: {this.props.selectedHabit.start_date}</p>
        <p>Cue: {this.props.selectedHabit.cue}</p>
        <p>Routine: {this.props.selectedHabit.routine}</p>
        <p>Reward: {this.props.selectedHabit.reward}</p>
        <p>
          <Link to="/dashboard">
            <button className="ui button" type="Submit" onClick={(event)=> this.handleDelete(event)}>Delete Habit</button>
          </Link>
        </p>
        <p>
          <Link to="/editform">
            <button className="ui button" type="Submit">Edit Habit</button>
          </Link>
        </p>
        <p>
          <button className="ui button" type="Submit" onClick={(event)=> this.handleCreate(event)}>Create Habit Checklist</button>
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
