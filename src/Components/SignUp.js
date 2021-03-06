import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from '../store/actions/userActions'
import { Link } from 'react-router-dom'

class SignUp extends Component {

  handleSignUp = (event) => {
    event.preventDefault()
    this.props.signUpUser(event)
      .then(r => {
        if (r === "ERROR") {
          return console.log("hit error");
        }
        this.props.history.push('/about_us')
      })
  }

  render(){
    return(
      <div>
        <h1 id="logo">The Compound Effect</h1>
        <p id="register_here"> the power of small, daily steps</p>
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
      <p id="register_here">Have an account?
        <Link to='/login'> Sign In</Link>
      </p>
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
