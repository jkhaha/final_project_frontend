const initialState = {
  id: 0,
  username: ''
}



const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case('LOG_IN'): {
      console.log(action.payload.user)
      return action.payload.user
    }
    default:
      return state;
  }
}

export default userReducer;
