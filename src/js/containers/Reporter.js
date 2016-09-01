import React from 'react'
import { connect } from 'react-redux'

import PageLayout from '../components/PageLayout'
import { selectTab } from '../actions/pageLayout'


const mapStateToProps = (state, ownProps) => {
  return {
    activeTab: state.pageLayout.activeTab
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTabSelect: (eventKey) => { dispatch(selectTab(eventKey)) }
  }
}

const Reporter = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout)

export default Reporter
