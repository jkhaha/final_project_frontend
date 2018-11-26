const initialState = {
  id: 0
}



const userReducer = (state = initialState, action) => {
  console.log("IN USER REDUCER")
  switch (action.type) {
    case('LOG_IN'): {
      return action.payload
    }
    default:
      return state;
  }
}

export default userReducer;
