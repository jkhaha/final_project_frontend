import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSingleHabit } from '../store/actions/habitActions'

class HabitCard extends Component {

  render(){
  return (
    <div className="habits">
      <ul>
        <Link to='/habits'>
          <div className="habit_line"  onClick={() => this.props.getSingleHabit(this.props.habit)} id="habit_card">
            <li className="habit_description">
              {this.props.habit.description}
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getSingleHabit: (habit) => dispatch(getSingleHabit(habit)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitCard)
