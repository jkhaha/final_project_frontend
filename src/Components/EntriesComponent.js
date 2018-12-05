// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import NavBar from './NavBar'
// import { Link } from 'react-router-dom'
// import { loadEntries } from '../store/actions/entryActions'
//
// class EntriesComponent extends Component {
//
//   componentDidMount(){
//     this.props.loadEntries()
//   }
//
//   handleCreate=(event) => {
//     event.preventDefault()
//     console.log(this.props.selectedHabit);
//     let options = {
//             method: "POST",
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${localStorage.getItem('token')}`},
//             body: JSON.stringify({entry: {
//                 habit_id: this.props.selectedHabit.id,
//                 completed_status: false,
//                 date_time: ''
//             }})
//           }
//             fetch("http://localhost:3001/entries", options)
//   }
//
//   render(){
//     console.log(this.props);
//     return(
//       <div>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     entries: state.entries
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadEntries: () => dispatch(loadEntries())
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(EntriesComponent);
