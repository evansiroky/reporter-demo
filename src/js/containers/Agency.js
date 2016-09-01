import React from 'react'
import { connect } from 'react-redux'

import AgencyLayout from '../components/AgencyLayout'


const mapStateToProps = (state, ownProps) => {
  return {
    agencyStats: state.agencyStats
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { return {}  }

const Agency = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyLayout)

export default Agency