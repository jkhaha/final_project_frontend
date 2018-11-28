import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadHabits } from '../store/actions/habitActions'

class HabitBoards extends Component {

  componentDidMount(){
    this.props.loadHabits()
  }

  render(){
    return(
      <h6>Habit Boards (inside dashboard)</h6>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state)
// }

const mapDispatchToProps = (dispatch) => {
  return {
    loadHabits: () => dispatch(loadHabits())
  }
}


export default connect(null, mapDispatchToProps)(HabitBoards)
