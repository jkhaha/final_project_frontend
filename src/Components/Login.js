import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logInUser } from '../store/actions/userActions'
import { Link } from 'react-router-dom'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.logInUser(event)
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
        <form className="ui form" onSubmit = {this.handleSubmit} id="login_div">
          <h1 id="header">Login</h1>

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
          <button className="ui button" type="Submit">Login</button>
        </div>
        </form>
        <p id="register_here">New to us?
          <Link to='/register'> Register Here</Link>
        </p>
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
