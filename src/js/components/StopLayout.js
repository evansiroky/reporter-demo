import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'


export default class StopLayout extends React.Component {

  render () {
    return (
      <BootstrapTable
        data={this.props.stops}
        striped={true}
        hover={true}
      >
        <TableHeaderColumn dataField='stop_id' isKey={true} hidden={true} />
        <TableHeaderColumn dataField='stop_name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='num_trips'>Number of Trips</TableHeaderColumn>
        <TableHeaderColumn dataField='average_headway'>Average Headway</TableHeaderColumn>
        <TableHeaderColumn dataField='best_headway'>Best Headway</TableHeaderColumn>
        <TableHeaderColumn dataField='network_importance'>Network Importance</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
