import React, { Component } from 'react';
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import { moment } from 'moment'
import { Link } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar'

class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    // this.handleCalendarChange = this.handleCalendarChange.bind(this);
  }

  state = {
    id: 0,
    description: '',
    frequency: '',
    start_date: '',
    cue: '',
    routine: '',
    reward: ''
  }
 //
 //  handleCalendarChange = (date) => {
 //    // const valueOfInput =  date.format("MMM Do YY");
 //    this.setState({
 //     startDate: date
 //   });
 // }

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
                user_id: this.props.currentUserId,
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
        <div id="habit_form">
        <form className="ui form" onSubmit = {this.handleSubmit} >
          <h1>HabitForm</h1>
          <div className="required field">
            <label>Habit Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="ex. workout for 30 minutes a day"/>
          </div>
          <div className="required field">
          <label>Habit Frequency</label>
            <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange} placeholder="ex. every 3 days"/>
          </div>

          <div className=" field">
          <label>Start Date</label>
            <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="MM/DD/YYYY"/>
          </div>

          <div className=" field">
          <label>Cue</label>
            <input type="text" name="cue" value={this.state.cue} onChange={this.handleChange} placeholder="ex. wake up and go to the gym"/>
          </div>
          <div className=" field">
          <label>Routine</label>
            <input type="text" name="routine" value={this.state.routine} onChange={this.handleChange} placeholder="ex. workout for 30 minutes"/>
          </div>
          <div className=" field">
          <label>Reward</label>
            <input type="text" name="reward" value={this.state.reward} onChange={this.handleChange} placeholder="ex. smoothie post workout!"/>
          </div>

            <button className="ui button" type="Submit">Create A Habit</button>

        </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUserId: state.currentUser.id
  }
}

export default connect(mapStateToProps)(HabitForm)
