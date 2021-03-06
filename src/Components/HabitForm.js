import React, { Component } from 'react';
import { connect } from 'react-redux'

// import "react-datepicker/dist/react-datepicker.css";
import NavBar from './NavBar'

class HabitForm extends Component {

  state = {
    id: 0,
    description: '',
    cue: '',
    routine: '',
    reward: ''
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({habit: {
                user_id: this.props.currentUserId,
                description: event.target.description.value,
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
          <h1>Habit Form</h1>
          <div className="required field">
            <label>Habit Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="ex. workout for 30 minutes a day"/>
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
    currentUserId: state.id
  }
}

export default connect(mapStateToProps)(HabitForm)
