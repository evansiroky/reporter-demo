import { combineReducers } from "redux"

import agencyStats from './agencyStats'
import pageLayout from './pageLayout'
import routes from './routes'

export default combineReducers({
  agencyStats,
  pageLayout,
  routes
})
