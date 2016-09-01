import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default class PageLayout extends React.Component {

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>Agency Data</Col>
        </Row>
      </Grid>
    )
  }
}
