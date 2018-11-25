const initialState = {
  auth: {
    currentUser: {}
  }
}



const userReducer = (state = initialState, action) => {
  console.log("IN USER REDUCER")
  switch (action.type) {
    case('LOG_IN'): {
      return {...state, currentUser: action.payload}
    }
    default:
      return state;
  }
}

export default userReducer;
