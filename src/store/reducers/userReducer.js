const initialState = {
  id: 0,
  username: ''
}



const userReducer = (state = initialState, action) => {
// add a switch statement
  switch (action.type) {
    case('LOG_IN'): {
      return action.payload.user
      console.log("in log in");
    }
    case('SIGN_UP_NEW_USER'): {
      return action.payload.user
      console.log("in sign up");
    }
    default:
      return state;
  }
}

export default userReducer;
