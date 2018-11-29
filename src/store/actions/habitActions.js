// import { createHabit } from './adapter.js'

// action creators
export const handleHabitSubmit = (habit) => ({
  type: 'CREATE_HABIT',
  payload: {habit}
})

export const getHabits = (habits) => ({ type: 'FETCH_USER_HABITS', payload: habits})

// thunk creators
export const loadHabits = (event) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/habits')
    .then(res => res.json())
    .then(res => dispatch(getHabits(res)))
    .catch(console.error)
  }
}
