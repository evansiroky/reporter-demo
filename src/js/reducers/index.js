import { combineReducers } from "redux"

import agencyStats from './agencyStats'
import pageLayout from './pageLayout'

export default combineReducers({
  agencyStats,
  pageLayout
})
