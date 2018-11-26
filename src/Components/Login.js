import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logInUser } from '../store/actions/userActions'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('inside handle Submit')
    this.props.logInUser(event)
  }

  render(){
    return(
      <div>
        <form className="ui form" onSubmit = {this.handleSubmit}>
          <h1>Login</h1>
          <div className="field">
            <div className='ui left icon input'>
              <i className="user icon">
            </i>
            <input type="text" name="username" placeholder="Username"/>
            </div>
          </div>

          <div className="field">
            <div className='ui left icon input'>
              <i className="lock icon">
            </i>
              <input type="password" name="password" placeholder="Password"/>
                </div>
        </div>
          <button className="ui button" type="Submit">Login</button>
        </form>

        <div className="ui message">
          New to us?
          <a href="#"> Sign Up</a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (event) => dispatch(logInUser(event))
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
