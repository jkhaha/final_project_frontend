import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadEntries } from '../store/actions/entryActions'

class EntriesComponent extends Component {
  handleClick = (e) => {
    console.log("hi i'm here", this.props);
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
  return {
    loadEntries: () => dispatch(loadEntries())
  }
}

export default connect(mapStateToProps)(EntriesComponent)
