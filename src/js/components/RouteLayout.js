import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Spinner from 'react-spinkit'


export default class RouteLayout extends React.Component {

  componentWillMount () {
    this.props.onComponentMount(this.props)
  }

  render () {

    const self = this

    return (
      <Grid>

        {this.props.routes.fetchStatus.fetching &&
          <Row>
            <Col xs={12}>
              <Spinner spinnerName='circle' />
              <p>Loading...</p>
            </Col>
          </Row>
        }

        {this.props.routes.fetchStatus.error &&
          <Row>
            <Col xs={12}>
              <p>An error occurred while trying to fetch the data</p>
            </Col>
          </Row>
        }

        {this.props.routes.fetchStatus.fetched &&
          <BootstrapTable
            data={this.props.routes.data}
            striped={true}
            hover={true}
          >
            <TableHeaderColumn dataField='route_id' isKey={true} hidden={true} />
            <TableHeaderColumn dataField='route_short_name'>Short Name</TableHeaderColumn>
            <TableHeaderColumn dataField='route_long_name'>Long Name</TableHeaderColumn>
            <TableHeaderColumn dataField='route_desc'>Description</TableHeaderColumn>
            <TableHeaderColumn
              dataField='route_url'
              dataFormat={(cell, row) => {
                return ( <a href={cell} target={'_blank'} >Link</a> )
              }}>
                Route URL
            </TableHeaderColumn>
            <TableHeaderColumn
              dataFormat={(cell, row) => {
                return (
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => { self.props.viewPatterns(row) }}
                  >
                    View Patterns
                  </Button>
                )
              }}>
                Patterns
            </TableHeaderColumn>
          </BootstrapTable>
        }
      </Grid>
    )
  }
}
