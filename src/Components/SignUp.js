import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from '../store/actions/userActions'

class SignUp extends Component {

  handleSignUp = (event) => {
    event.preventDefault()
    this.props.signUpUser(event)
      .then(r => {
        if (r === "ERROR") {
          return console.log("hit error");
        }
        this.props.history.push('/dashboard')
      })
  }

  render(){
    return(
      <div>
        <h1 id="logo">The Compound Effect</h1>

        <form className="ui form" id="signup_div" onSubmit = {this.handleSignUp}>
          <h1 id="header">Register</h1>

          <div className="field">
              <label></label>
            <div className='ui left icon input'>
              <i className="user icon">
            </i>
            <input type="text" name="username" placeholder="Username"/>
            </div>

          <div className="field">
              <label></label>
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
