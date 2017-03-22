import { combineReducers } from 'redux'
import tea from './tea.js'
import timer from './timer.js'

const timerReducer = combineReducers({
  tea,
  timer
})

export default timerReducer
