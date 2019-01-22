import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHabits } from '../store/actions/habitActions'
import HabitCard from './HabitCard'

class HabitBoards extends Component {

  componentDidMount(){
    this.props.loadHabits()
  }

  render(){
  let habitsToRender = this.props.habits.map(habitObj => <HabitCard key={habitObj.id} habit={habitObj}/>)
    return(
      <div className="user_habits">
        {habitsToRender}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHabits: () => dispatch(loadHabits())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HabitBoards)
