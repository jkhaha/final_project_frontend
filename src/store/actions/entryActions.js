//action creators
export const getEntries = (entries) => ({ type: 'FETCH_HABIT_ENTRIES', payload: entries})

// thunk creators
export const loadEntries = (event) => {
  console.log("event", event);
  return (dispatch) => {
    return fetch('http://localhost:3001/entries')
    .then(res => res.json())
    .then(res => dispatch(getEntries(res)))
    .catch(console.error)
  }
}
