const initialState = []
// state will always be array of habits
// don't have access to current user
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('CREATE_HABIT'): {
      return [...state, action.payload]
    }
    case ('FETCH_USER_HABITS'): {
      // const userHabits = state.filter((habit) => {habit.user_id === action.payload})
      // return userHabits
    }
    default:
      return state;
  }
}

export default habitReducer;
