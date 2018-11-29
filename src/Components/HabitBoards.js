import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHabits } from '../store/actions/habitActions'
import HabitCard from './HabitCard'

class HabitBoards extends Component {

  componentDidMount(){
    this.props.loadHabits()
  }

  render(){
    console.log(this.props.habits[0], "what are habit props");
  let habitsToRender = this.props.habits.map(habitObj => <HabitCard key={habitObj.id} habit={habitObj}/>)
    return(
      <div className="ui three column grid">
       <div className="row">
        {habitsToRender}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits.habits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHabits: () => dispatch(loadHabits())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HabitBoards)
