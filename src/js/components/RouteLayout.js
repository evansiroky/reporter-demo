import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'


export default class RouteLayout extends React.Component {

  render () {
    return (
      <BootstrapTable
        data={this.props.routes}
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
    )
  }
}
