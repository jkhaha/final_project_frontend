import React, { Component } from 'react';
import { connect } from 'react-redux'


class HabitCard extends Component {
  render(){
    console.log(this.props)
  return (
    <div className="ui three column grid">
    <div className="column">
      <div className="ui fluid card">
      <div className="image">
      <img src=""/>
      </div>
      <div>ID: {this.props.habit.id} </div>
    </div>
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
