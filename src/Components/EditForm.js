import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateHabit } from '../store/actions/habitActions'
import NavBar from './NavBar'

class EditForm extends Component {

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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate (prevState, prevProps) {
    console.log("prevProps", prevProps);
    if (prevProps.id !== this.props.selectedHabit.id) {
      this.setState({
        id: this.props.selectedHabit.id,
        description: this.props.selectedHabit.description,
        frequency: this.props.selectedHabit.frequency,
        start_date: this.props.selectedHabit.start_date,
        cue: this.props.selectedHabit.cue,
        routine: this.props.selectedHabit.routine,
        reward: this.props.selectedHabit.reward
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("state", this.state);
    this.props.editHabit(this.state)
  }


  render() {
console.log(this.props.selectedHabit);
    return (
      <div>
      <NavBar/>
        <div id="habit_form">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <h1>HabitForm</h1>
          <div className="required field">
            <label>Habit Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder={this.props.selectedHabit.description}/>
          </div>
          <div className="required field">
          <label>Habit Frequency</label>
            <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange} placeholder={this.props.selectedHabit.frequency}/>
          </div>

          <div className=" field">
          <label>Start Date</label>
            <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="MM/DD/YYYY"/>
          </div>

          <div className=" field">
          <label>Cue</label>
            <input type="text" name="cue" value={this.state.cue} onChange={this.handleChange} placeholder={this.props.selectedHabit.cue}/>
          </div>
          <div className=" field">
          <label>Routine</label>
            <input type="text" name="routine" value={this.state.routine} onChange={this.handleChange} placeholder={this.props.selectedHabit.routine}/>
          </div>
          <div className=" field">
          <label>Reward</label>
            <input type="text" name="reward" value={this.state.reward} onChange={this.handleChange} placeholder={this.props.selectedHabit.reward}/>
          </div>

          <button className="ui button" type="Submit">Edit This Habit</button>

        </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedHabit: state.selectedHabit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editHabit: (habit) => dispatch(updateHabit(habit))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
