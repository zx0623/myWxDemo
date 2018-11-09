import { createAction, createReducer } from 'redux-act'

const add = createAction('添加')
const increment = createAction('添加1')
const decrement = createAction('decrement')

export default createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
  [add]: (state, payload) => state + payload
}, 0)
