const initialState = {
  id: 0,
  username: ''
}



const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case('LOG_IN'): {
      return action.payload
    }
    default:
      return state;
  }
}

export default userReducer;
