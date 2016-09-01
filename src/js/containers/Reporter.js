import React from 'react'
import { connect } from 'react-redux'




class Reporter extends React.Component {

  render () {
    return (
      <div>Hello World</div>
    )
  }
}


const mapStateToProps = (state, ownProps) => { return {} }
const mapDispatchToProps = (dispatch, ownProps) => { return {} }


Reporter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reporter)

export default Reporter
