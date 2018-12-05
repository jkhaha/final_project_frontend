const initialState = {
  habits: [],
  selectedHabit: {}
}

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('CREATE_HABIT'): {
      return {...state, habits: [...state.habits, action.payload]}
    }
    case ('FETCH_USER_HABITS'): {
      console.log("fetch user habits", action)
      // const userHabits = state.filter((habit) => {habit.user_id === action.payload})
      return {...state, habits: action.payload}
    }
    case('FETCH_CHOSEN_HABIT'): {
      return {...state, selectedHabit: action.payload}
    }
    case('EDIT_HABIT'): {
      console.log(action.payload);
      return {...state, selectedHabit: action.payload}
    }
    default:
      return state;
  }
}

export default habitReducer;
