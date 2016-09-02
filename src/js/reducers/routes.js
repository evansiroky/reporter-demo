import update from 'react-addons-update'


const defaultState = {
  fetchStatus: {
    fetched: true,
    fetching: false,
    error: false
  },
  data: [
    {
      route_id: '1',
      route_name: 'Route 1',
      num_patterns: 4,
      stop_density: 3,
      num_trips: 2,
      avg_speed: 1
    }, {
      route_id: '2',
      route_name: 'Route 2',
      num_patterns: 4,
      stop_density: 3,
      num_trips: 2,
      avg_speed: 1
    }
  ]
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
      return {
        fetchStatus: {
          fetched: false,
          fetching: true,
          error: false
        },
        data: action.data
      }
      break
    default:
      return state
  }

}
