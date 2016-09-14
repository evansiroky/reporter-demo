import update from 'react-addons-update'

import { getRouteName } from '../util'


const defaultState = {
  routeFilter: null,
  fetchStatus: {
    fetched: false,
    fetching: false,
    error: false
  },
  data: []
}

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'FETCH_PATTERNS_PENDING':
      return update(state,
        {
          fetchStatus: {
            $set: {
              fetched: false,
              fetching: true,
              error: false
            }
          },
          data: {$set: []}
        }
      )
      break
    case 'FETCH_PATTERNS_REJECTED':
      return update(state, {
        fetchStatus: {
          $set: {
            fetched: false,
            fetching: false,
            error: true
          }
        }
      })
      break
    case 'FETCH_PATTERNS_FULFILLED':
      let allRoutes = action.payload.data.routes,
        allPatterns = []

      for(let i=0; i < allRoutes.length; i++) {
        const curRouteId = allRoutes[i].route_id
        const curRouteName = getRouteName(allRoutes[i])

        for(let j=0; j < allRoutes[i].patterns.length; j++) {
          let curPattern = allRoutes[i].patterns[j]
          curPattern.route_id = curRouteId
          curPattern.route_name = curRouteName
          allPatterns.push(curPattern)
        }
      }

      return update(state,
        {
          fetchStatus: {
            $set: {
              fetched: true,
              fetching: false,
              error: false
            }
          },
          data: {$set: allPatterns}
        }
      )
      break
    case 'PATTERN_ROUTE_FILTER_CHANGE':
      return update(state, { routeFilter: { $set: action.payload }})
      break;
    default:
      return state
  }

}
