import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../store/actions/userActions'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handle submit inside')
    this.props.loginUser(event)
  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h1>Login</h1>
          <label>Username: <input type="text" name="username"/></label>
          <label>Password: <input type="text" name="password"/></label>
          <input type="Submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (event) => dispatch(loginUser(event))
  }
}

const mapStateToProps = (state) => {
  // return { user: state.user.auth.currentUser}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
