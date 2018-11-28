import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { createNewHabit } from '../store/actions/habitActions'
import NavBar from './NavBar'

class HabitForm extends Component {

  state = {
    id: 0,
    description: '',
    frequency: '',
    start_date: '',
    cue: '',
    routine: '',
    reward: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('inside handle Submit')
    let options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({habit: {
                user_id: 4,
                description: event.target.description.value,
                frequency: event.target.frequency.value,
                start_date: event.target.start_date.value,
                cue: event.target.cue.value,
                routine: event.target.routine.value,
                reward: event.target.reward.value
            }})
          }
          fetch("http://localhost:3001/habits", options)
  }

  render(){
    return(
      <div>
        <NavBar/>
        <form className="ui form" onSubmit = {this.handleSubmit}>
          <h1>HabitForm</h1>
          <div className="required field">
            <label>Habit Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="a short description of the habit you want to track..."/>
          </div>
          <div className="required field">
          <label>Habit Frequency</label>
            <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange} placeholder="daily? every three days?"/>
          </div>
          <div className="required field">
          <label>Start Date</label>
            <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="Start Date"/>
          </div>
          <div className=" field">
          <label>Cue</label>
            <input type="text" name="cue" value={this.state.cue} onChange={this.handleChange} placeholder="Cue"/>
          </div>
          <div className=" field">
          <label>Routine</label>
            <input type="text" name="routine" value={this.state.routine} onChange={this.handleChange} placeholder="Routine"/>
          </div>
          <div className=" field">
          <label>Reward</label>
            <input type="text" name="reward" value={this.state.reward} onChange={this.handleChange} placeholder="Reward"/>
          </div>
          <button className="ui button" type="Submit">Create A Habit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createNewHabit: (event) => dispatch(createNewHabit(event))
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state)
//   return { habit: state.habit}
// }


export default HabitForm
