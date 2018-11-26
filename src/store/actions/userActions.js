import { fetchForLogin } from './adapter.js'

// action creators
export const handleLogin = (user) => ({
  type: 'LOG_IN',
  payload: {user}
})

// thunk creators
export const loginUser = (event) => {
  console.log('in login thunk creator')
  console.log(event)
  return (dispatch) => {
    return fetchForLogin(event)
    .then(resp => dispatch(handleLogin(resp.user)))
    .then(resp => localStorage.setItem("token", resp.token))
  }
}
