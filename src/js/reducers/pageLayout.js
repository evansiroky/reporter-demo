import update from 'react-addons-update'


const defaultState = {
  activeTab: 'agency'
}

export default function reducer(state=defaultState, action) {

  switch (action.type) {
    case 'REPORT_TAB_CHANGE':
      return update(state, { activeTab: { $set: action.tabKey }})
      break
    default:
      return state
  }

}
