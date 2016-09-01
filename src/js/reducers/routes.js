import update from 'react-addons-update'


const defaultState = [
  {
    route_id: '1',
    route_name: '1',
    num_patterns: 4,
    stop_density: 3,
    num_trips: 2,
    avg_speed: 1
  }, {
    route_id: '2',
    route_name: '2',
    num_patterns: 4,
    stop_density: 3,
    num_trips: 2,
    avg_speed: 1
  }
]

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'RECEIVE_NEW_ROUTES':
      return update(state, {$merge: action.data })
      break
    default:
      return state
  }

}
