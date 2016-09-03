import React from 'react'
import { connect } from 'react-redux'

import RouteLayout from '../components/RouteLayout'
import { selectTab } from '../actions/pageLayout'
import { fetchRoutes } from '../actions/routes'
import { patternRouteFilterChange } from '../actions/patterns'


const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComponentMount: (initialProps) => {
      if(!initialProps.routes.fetchStatus.fetched) {
        dispatch(fetchRoutes())
      }
    },
    viewPatterns: (row) => {
      dispatch(patternRouteFilterChange(row))
      dispatch(selectTab('patterns'))
    }
  }
}

const Routes = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteLayout)

export default Routes
