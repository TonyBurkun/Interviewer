import { combineReducers } from 'redux'
import notifications from './notifications'
import project from './project'
import sideBar from './sideBar'

export default combineReducers({
  project,
  notifications,
    sideBar
})