import React from 'react'
import { connect } from 'react-redux'

import PatternLayout from '../components/PatternLayout'
import { fetchPatterns, patternRouteFilterChange } from '../actions/patterns'
import { fetchRoutes } from '../actions/routes'


const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes,
    patterns: state.patterns
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComponentMount: (initialProps) => {
      if(!initialProps.routes.fetchStatus.fetched) {
        dispatch(fetchRoutes())
      }
      if(!initialProps.patterns.fetchStatus.fetched) {
        dispatch(fetchPatterns())
      }
    },
    onRouteFilterChange: (newValue) => {
      dispatch(patternRouteFilterChange(newValue))
    },
    viewStops: (row) => {
      dispatch(viewPatternStops(row))
    }
  }
}

const Patterns = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternLayout)

export default Patterns
