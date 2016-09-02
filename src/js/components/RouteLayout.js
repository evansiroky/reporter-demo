import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Spinner from 'react-spinkit'


export default class RouteLayout extends React.Component {

  componentWillMount () {
    this.props.onComponentMount(this.props)
  }

  render () {
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
            <TableHeaderColumn dataField='route_name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='num_patterns'>Number of Patterns</TableHeaderColumn>
            <TableHeaderColumn dataField='stop_density'>Stop Density</TableHeaderColumn>
            <TableHeaderColumn dataField='num_trips'>Number of Trips</TableHeaderColumn>
            <TableHeaderColumn dataField='avg_speed'>Average Speed</TableHeaderColumn>
          </BootstrapTable>
        }
      </Grid>
    )
  }
}
