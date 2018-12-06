const initialState = {
  entries: [],
  selectedEntry: {}
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('FETCH_HABIT_ENTRIES'): {
      // console.log("in entry reducer", state);
      return {...state, entries: action.payload}
    }
    default:
      return state;
  }
}

export default entryReducer;
