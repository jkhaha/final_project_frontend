import { logIn } from './adapter.js'
import { signUp } from './adapter.js'
import { logOut } from './adapter.js'

// action creators
export const handleLogIn = (user) => ({
  type: 'LOG_IN',
  payload: {user}
})

export const handleSignUp = (user) => ({
  type: 'SIGN_UP_NEW_USER',
  payload: {user}
})

export const handleLogout = (user) => ({
  type: 'LOG_OUT_USER',
  payload: {}
})

// thunk creators
export const logInUser = (event) => {
  return (dispatch) => {
    return logIn(event)
    .then(resp => {
      if (resp.error) {
        return "ERROR"
      }
      dispatch(handleLogIn(resp.user))
      localStorage.setItem("token", resp.jwt)
    })
  }
}

export const signUpUser = (event) => {
  return (dispatch) => {
    return signUp(event)
    .then(resp => {
      if (resp.error) {
        return "ERROR"
      }
      dispatch(handleSignUp(resp.user))
      localStorage.setItem("token", resp.jwt)
    })
  }
}

export const logoutUser = (event) => {
  return (dispatch) => {
    return logOut(event)
    .then(resp => {
      dispatch(handleLogout(resp.user))
    })
  }
}
