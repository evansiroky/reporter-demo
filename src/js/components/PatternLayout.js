import React from 'react'
import { Grid, Row, Col, Alert, Button } from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Select from 'react-select'

import Loading from './common/Loading'


export default class RouteLayout extends React.Component {

  componentWillMount () {
    this.props.onComponentMount(this.props)
  }

  render () {

    const self = this

    return (
      <Grid>

        {this.props.routes.fetchStatus.fetched &&
          <Row>
            <Col xs={12} md={6} style={{padding: '20px'}}>
              <label>Filtering Patterns for Route:</label>
              <Select
                options={this.props.routes.data}
                labelKey={'route_name'}
                valueKey={'route_id'}
                placeholder={'Select a Route'}
                value={this.props.patterns.routeFilter}
                onChange={this.props.onRouteFilterChange}
                />
            </Col>
          </Row>
        }

        {this.props.patterns.fetchStatus.fetching &&
          <Loading />
        }

        {this.props.patterns.fetchStatus.error &&
          <Alert bsStyle="danger">
            An error occurred while trying to fetch the data
          </Alert>
        }

        {this.props.patterns.fetchStatus.fetched &&
          <BootstrapTable
            data={this.props.patterns.data}
            striped={true}
            hover={true}
          >
            <TableHeaderColumn dataField='pattern_id' isKey={true} hidden={true} />
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='trip_count'>Number of Trips</TableHeaderColumn>
            <TableHeaderColumn dataField='stop_count'>Number of Stops</TableHeaderColumn>
            <TableHeaderColumn
              dataFormat={(cell, row) => {
                return (
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => { self.props.viewStops(row) }}
                  >
                    View Stops
                  </Button>
                )
              }}>
                Stops
            </TableHeaderColumn>
          </BootstrapTable>
        }
      </Grid>
    )
  }
}
