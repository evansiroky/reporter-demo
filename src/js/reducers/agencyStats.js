import update from 'react-addons-update'


const defaultState = [
  {
    statName: 'Span Of Service',
    statValue: '5am - 1am'
  }, {
    statName: 'Spatial Spread',
    statValue: '55 sq mi'
  }, {
    statName: 'Daily Average Headway',
    statValue: '55.5 minutes'
  }, {
    statName: 'Daily Average Revenue Hours',
    statValue: '555 hours'
  }, {
    statName: 'Daily Average Revenue Miles',
    statValue: '555 miles'
  }, {
    statName: 'Average Route Speed',
    statValue: '55 mph'
  }
]

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'RECEIVE_NEW_STATS':
      return update(state, {$merge: action.data })
      break
    default:
      return state
  }

}
