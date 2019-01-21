const initialState = {
  id: 0,
  username: '',
  habits: [],
  selectedHabit: {},
  entries: [],
  selectedEntry: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case('LOG_IN'): {
      return {...state, id: action.payload.user.id, username: action.payload.user.username}
    }
    case('SIGN_UP_NEW_USER'): {
      return {...state, id: action.payload.user.id, username: action.payload.user.username}
    }
    case ('CREATE_HABIT'): {
      return {...state, habits: [...state.habits, action.payload]}
    }
    case ('FETCH_USER_HABITS'): {
      const userHabits = action.payload.filter((habit) => {
        return habit.user_id === state.id
      })
      return {...state, habits: userHabits}
    }
    case('FETCH_CHOSEN_HABIT'): {
      return {...state, selectedHabit: action.payload}
    }
    case('EDIT_HABIT'): {
      return {...state, selectedHabit: action.payload}
    }
    case ('FETCH_HABIT_ENTRIES'): {
      return {...state, entries: action.payload}
    }
    default:
      return state;
  }
}

export default userReducer;
