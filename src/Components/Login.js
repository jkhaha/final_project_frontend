import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logInUser } from '../store/actions/userActions'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.logInUser(event)
    this.props.history.push('/dashboard')
  }

  render(){
    return(
      <div className="ui middle aligned center aligned grid">
        <div className="column">
        <form className="ui large form" onSubmit = {this.handleSubmit}>
          <h1>Login</h1>
          <div className="ui stacked segment">
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
        </div>
        </form>

        <div className="ui message">
          New to us?
          <a href="register"> Register Here</a>
        </div>
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
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
