const initialState = {
  habits: []
}

const habitReducer = (state = initialState, action) => {
  console.log('IN HABIT REDUCER')
  switch (action.type) {
    default:
      return state;
  }
}
