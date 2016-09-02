import update from 'react-addons-update'


const defaultState = {
  fetchStatus: {
    fetched: true,
    fetching: false,
    error: false
  },
  data: []
}

export default function reducer(state=defaultState, action) {

  console.log(action)

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
          fetched: true,
          fetching: false,
          error: false
        },
        data: action.payload.data.routes
      }
      break
    default:
      return state
  }

}
