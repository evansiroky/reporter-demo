import React from 'react'
import { connect } from 'react-redux'

import StopLayout from '../components/StopLayout'


const mapStateToProps = (state, ownProps) => {
  return {
    stops: state.stops
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { return {}  }

const Stops = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopLayout)

export default Stops
