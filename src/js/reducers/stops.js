import update from 'react-addons-update'


const defaultState = [
  {
    stop_id: '1',
    stop_name: '1st & Main',
    num_trips: 4,
    average_headway: '23.4 minutes',
    best_headway: '15 minutes',
    network_importance: 'Extremely important'
  }, {
    stop_id: '2',
    stop_name: '1st & Broadway',
    num_trips: 4,
    average_headway: '23.4 minutes',
    best_headway: '15 minutes',
    network_importance: 'Useless'
  }
]

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'RECEIVE_NEW_STOPS':
      return update(state, {$merge: action.data })
      break
    default:
      return state
  }

}
