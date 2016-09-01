import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'


export default class AgencyLayout extends React.Component {

  render () {
    return (
      <BootstrapTable
        data={this.props.agencyStats}
        striped={true}
        hover={true}
      >
        <TableHeaderColumn dataField='statName' isKey={true}>Statistic</TableHeaderColumn>
        <TableHeaderColumn dataField='statValue'>Value</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
