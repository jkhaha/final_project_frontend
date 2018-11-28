import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from '../store/actions/userActions'

class SignUp extends Component {

  handleSignUp = (event) => {
    event.preventDefault()
    this.props.signUpUser(event)
    this.props.history.push('/dashboard')
  }

  render(){
    return(
      <div className="ui middle aligned center aligned grid">
        <div className="column">
        <form className="ui large form" onSubmit = {this.handleSignUp}>
          <h1>Register</h1>
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
          <button className="ui button" type="Submit">Sign Up</button>
          </div>
      </form>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (event) => dispatch(signUpUser(event))
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
