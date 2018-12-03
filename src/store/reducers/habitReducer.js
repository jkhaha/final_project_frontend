const initialState = {
  habits: [],
  selectedHabit: {}
}
// state will always be array of habits
// don't have access to current user
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('CREATE_HABIT'): {
      return {...state, habits: [...state.habits, action.payload]}
    }
    case ('FETCH_USER_HABITS'): {
      // const userHabits = state.filter((habit) => {habit.user_id === action.payload})
      return {...state, habits: action.payload}
    }
    case('FETCH_CHOSEN_HABIT'): {
      return {...state, selectedHabit: action.payload}
    }
    default:
      return state;
  }
}

export default habitReducer;
