import React from 'react'
import { connect } from 'react-redux'

import RouteLayout from '../components/RouteLayout'


const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { return {}  }

const Routes = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteLayout)

export default Routes
