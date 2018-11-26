const initialState = []
// state will always be array of habits
// don't have access to current user
const habitReducer = (state = initialState, action) => {

  switch (action.type) {
    case ('ADD_HABIT'): {
      return [...state, action.payload]
    }
    default:
      return state;
  }
}

export default habitReducer;
