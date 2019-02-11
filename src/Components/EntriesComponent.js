import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateEntry } from '../store/actions/entryActions'
import { loadEntries } from '../store/actions/entryActions'

class EntriesComponent extends Component {
  handleClick = (e) => {
    console.log("hi i'm here", this.props);
    this.props.editEntry(this.state)
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <div>
        <span>
          <p className="entries_id">{this.props.entry.id}</p>
          <button onClick={this.handleClick} className="entries_button">Completed</button>
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
