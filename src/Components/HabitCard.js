import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSingleHabit } from '../store/actions/habitActions'

class HabitCard extends Component {

  handleClick = () => {
    console.log(this.props);
  }

  render(){
  return (
    <div className="ui three column grid">
      <div className="column">
        <Link to='/habits'>
          <div className="ui fluid card" onClick={this.handleClick}>
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
//   return { selected: ownProps.hobbit.id === state.hobbits.selectedHobbit.id }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return { selectHobbit: (hobbit) => dispatch(selectHobbit(hobbit)) }
// }

export default HabitCard
