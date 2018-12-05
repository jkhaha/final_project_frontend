const initialState = {
  id: 0,
  username: ''
}



const userReducer = (state = initialState, action) => {
// add a switch statement
  switch (action.type) {
    case('LOG_IN'): {
      return action.payload.user
    }
    default:
      return state;
  }
}

export default userReducer;
