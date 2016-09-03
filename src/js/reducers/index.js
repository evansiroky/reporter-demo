import { combineReducers } from "redux"

import agencyStats from './agencyStats'
import pageLayout from './pageLayout'
import patterns from './patterns'
import routes from './routes'
import stops from './stops'


export default combineReducers({
  agencyStats,
  pageLayout,
  patterns,
  routes,
  stops
})
