const initialState = {
  entries: [],
  selectedEntry: {}
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('FETCH_HABIT_ENTRIES'): {
      return {...state, entries: [...state.entries, action.payload]}
    }
    default:
      return state;
  }
}

export default entryReducer;
