import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from '../store/actions/userActions'

class SignUp extends Component {

  handleSignUp = (event) => {
    event.preventDefault()
    console.log('inside handleSignUp')
    this.props.signUpUser(event)
  }

  render(){
    return(
      <div>
        <form className="ui form" onSubmit = {this.handleSignUp}>
          <h1>Register</h1>
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
