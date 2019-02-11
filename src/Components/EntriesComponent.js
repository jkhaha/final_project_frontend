import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateEntry } from '../store/actions/entryActions'
import { loadEntries } from '../store/actions/entryActions'

let red = "#DD1155"
let green = "#06D6A0"
class EntriesComponent extends Component {

  handleClick = (e) => {
    console.log("hi i'm here", this.props.entry);
    this.props.editEntry(this.props.entry)
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <div>
        <span>
          <p className="entries_id">{this.props.entry.id}</p>
          <button style={this.props.entry.completed_status === true ? {backgroundColor: green} : {backgroundColor: red} } onClick={this.handleClick} className="entries_button">Completed</button>
        </span>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    loadEntries: () => dispatch(loadEntries()),
    editEntry: (entry) => dispatch(updateEntry(entry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntriesComponent)
