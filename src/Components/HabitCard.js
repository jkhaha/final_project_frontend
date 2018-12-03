import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSingleHabit } from '../store/actions/habitActions'

class HabitCard extends Component {

  render(){
  return (
    <div className="ui three column grid">
      <div className="column">
        <Link to='/habits'>
          <div className="ui fluid card"  onClick={() => this.props.getSingleHabit(this.props.habit)}>
            <div className="image">
              <img src=""/>
            </div>
            <div>ID: {this.props.habit.id} </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
}

// const mapStateToProps = (state, ownProps) => {
//   return { selectedHabit: ownProps.habit.id === state.habits.selectedHabit.id }
// }

const mapDispatchToProps = (dispatch) => {
  return { getSingleHabit: (habit) => dispatch(getSingleHabit(habit)) }
}

export default connect(null, mapDispatchToProps)(HabitCard)
