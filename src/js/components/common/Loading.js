import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Spinner from 'react-spinkit'


export default class Loading extends React.Component {

  render () {
    return (
      <Row>
        <Col xs={12}>
          <Spinner spinnerName='circle' />
          <p>Loading...</p>
        </Col>
      </Row>
    )
  }
}
