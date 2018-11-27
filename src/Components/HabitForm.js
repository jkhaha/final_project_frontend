import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewHabit } from '../store/actions/habitActions'
import NavBar from './NavBar'

class HabitForm extends Component {

  state = {
    id: 0,
    description: '',
    frequency: '',
    start_date: ''
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
    this.props.createNewHabit(event)
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
          <button className="ui button" type="Submit">Create A Habit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewHabit: (event) => dispatch(createNewHabit(event))
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(HabitForm)
