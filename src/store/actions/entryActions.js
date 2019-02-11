import { updateEntryFromAdapter } from './adapter'
//action creators
export const getEntries = (entries) => ({ type: 'FETCH_HABIT_ENTRIES', payload: entries})

export const editEntry = (entry) => ({ type: 'EDIT_ENTRY', payload: entry})

// thunk creators
export const loadEntries = (event) => {
  return (dispatch) => {

    return fetch('http://localhost:3001/entries')
    .then(res => res.json())
    .then(res => dispatch(getEntries(res)))
    .catch(console.error)
  }
}

export const updateEntry = (entry) => {
  return (dispatch) => {
    return updateEntryFromAdapter(entry)
    .then((res) => dispatch(editEntry(res)))
    .catch(console.error)
  }
}
