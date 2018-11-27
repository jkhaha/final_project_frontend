import { createHabit } from './adapter.js'

// action creators
export const handleHabitSubmit = (habit) => ({
  type: 'CREATE_HABIT',
  payload: {habit}
})

// thunk creators
export const createNewHabit = (event) => {
  return (dispatch) => {
    return createHabit(event)
    .then(resp => dispatch(handleHabitSubmit(resp))
    )
  }
}
