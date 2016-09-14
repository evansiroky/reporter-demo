import axios from 'axios'

import { config } from '../config'
import { compose, patterns } from '../graphql/query'


export function fetchPatterns(routeId) {
  return {
    type: 'FETCH_PATTERNS',
    payload: axios.get(compose(patterns, { feedId: config.feedId, routeId }))
  }
}

export function updateRouteFilter(routeId) {
  return {
    type: 'PATTERN_ROUTE_FILTER_CHANGE',
    payload: routeId
  }
}

export function patternRouteFilterChange(routeData) {
  return function (dispatch) {
    const newRouteId = (routeData && routeData.route_id) ? routeData.route_id : null
    dispatch(updateRouteFilter(newRouteId))
    dispatch(fetchPatterns(newRouteId))
  }
}
