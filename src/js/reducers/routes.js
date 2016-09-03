import update from 'react-addons-update'

import { getRouteName } from '../util'


const defaultState = {
  fetchStatus: {
    fetched: false,
    fetching: false,
    error: false
  },
  data: []
}

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'FETCH_ROUTES_PENDING':
      return {
        fetchStatus: {
          fetched: false,
          fetching: true,
          error: false
        },
        data: []
      }
      break
    case 'FETCH_ROUTES_REJECTED':
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
    case 'FETCH_ROUTES_FULFILLED':
      let newRoutes = []
      for (var i = 0; i < action.payload.data.routes.length; i++) {
        let curRoute = action.payload.data.routes[i]
        curRoute.route_name = getRouteName(curRoute)
        newRoutes.push(curRoute)
      }
      return {
        fetchStatus: {
          fetched: true,
          fetching: false,
          error: false
        },
        data: newRoutes
      }
      break
    default:
      return state
  }

}
