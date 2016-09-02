import React from 'react'
import { connect } from 'react-redux'

import RouteLayout from '../components/RouteLayout'
import { fetchRoutes } from '../actions/routes'


const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComponentMount: (initialProps) => {
      dispatch(fetchRoutes())
    },
    viewPatterns: (row) => {
      console.log(row)
    }
  }
}

const Routes = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteLayout)

export default Routes
