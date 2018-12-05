import React, { Component } from 'react';
import { connect } from 'react-redux'

class EntriesComponent extends Component {
  render(){
    return(
      <div>
      <div id="ui_checkbox">
        <input type="checkbox" id="my_check" name="example"></input> <label>{this.props.entry.id}</label>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadEntries: () => dispatch(loadEntries())
  }
export default EntriesComponent;
