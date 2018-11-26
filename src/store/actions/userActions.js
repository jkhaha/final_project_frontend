import { logIn } from './adapter.js'
import { signUp } from './adapter.js'

// action creators
export const handleLogIn = (user) => ({
  type: 'LOG_IN',
  payload: {user}
})

export const handleSignUp = (user) => ({
  type: 'SIGN_UP_NEW_USER',
  payload: {user}
})

// thunk creators
export const logInUser = (event) => {
  console.log('in login thunk creator')
  console.log(event)
  return (dispatch) => {
    return logIn(event)
    .then(resp => {
      console.log(resp, "in loginuser")
      dispatch(handleLogIn(resp.user))
      localStorage.setItem("token", resp.jwt)
    })
  }
}


export const signUpUser = (event) => {
  console.log('in signIn thunk creator')
  console.log(event)
  return (dispatch) => {
    return signUp(event)
    .then(resp => {
      dispatch(handleSignUp(resp.user))
      localStorage.setItem("token", resp.jwt)
    })
  }
}
