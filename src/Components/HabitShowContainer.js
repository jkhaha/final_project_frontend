import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './NavBar'
import EntriesComponent from './EntriesComponent'
import { Link } from 'react-router-dom'
import { loadEntries } from '../store/actions/entryActions'

class HabitShowContainer extends Component {

  componentDidMount(){
    this.props.loadEntries()
  }

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
    for(let i = 0; i < 11; i ++){

    event.preventDefault()
    let options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({entry: {
                habit_id: this.props.selectedHabit.id,
                completed_status: false,
            }})
          }
            fetch("http://localhost:3001/entries", options)
    }
  }

  render(){
    let entriesToRender = this.props.entries.map(entryObj => <EntriesComponent key={entryObj.id} entry={entryObj}/>)
    return(
      <div>
        <NavBar/>
        <div id="habit_description" className="split left">
        <p id="habit_header"><b>The Habit:</b> {this.props.selectedHabit.description}</p>
        <p><b>Cue:</b> {this.props.selectedHabit.cue}</p>
        <p><b>Routine:</b> {this.props.selectedHabit.routine}</p>
        <p><b>Reward:</b> {this.props.selectedHabit.reward}</p>
        <p>
          <Link to="/editform">
            <button className="ui button" type="Submit">Edit Habit</button>
          </Link>
        </p>
        <p>
          <Link to="/dashboard">
            <button className="ui button" type="Submit" onClick={(event)=> this.handleDelete(event)}>Delete Habit</button>
          </Link>
        </p>
        <p>
          <button className="ui button" type="Submit" onClick={(event)=> this.handleCreate(event)}>Create Habit Checklist</button>
        </p>
      </div>
      <div className="split right">

          {entriesToRender}

      </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state in habit show container", state);
  return {
    selectedHabit: state.selectedHabit,
    entries: state.entries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadEntries: () => dispatch(loadEntries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitShowContainer);
