// import { createHabit } from './adapter.js'

// action creators
export const handleHabitSubmit = (habit) => ({
  type: 'CREATE_HABIT',
  payload: {habit}
})

const getHabits = (habits) => ({ type: 'FETCH_USER_HABITS', PAYLOAD: habits})

// thunk creators
// export const createNewHabit = (event) => {
//   return (dispatch) => {
//     return createHabit(event)
//     .then(resp => dispatch(handleHabitSubmit(resp))
//     )
//   }
// }

export const loadHabits = (event) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/habits')
    .then(res => res.json())
    .then(res => dispatch(getHabits(res)))
    .catch(console.error)
  }
}
