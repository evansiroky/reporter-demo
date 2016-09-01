import { combineReducers } from "redux"

import agencyStats from './agencyStats'
import pageLayout from './pageLayout'
import routes from './routes'
import stops from './stops'


export default combineReducers({
  agencyStats,
  pageLayout,
  routes,
  stops
})
