import React from 'react'
import { Grid, PageHeader, Nav, NavItem } from 'react-bootstrap'

import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'

import Agency from '../containers/Agency'
import Routes from '../containers/Routes'
import Stops from '../containers/Stops'


export default class PageLayout extends React.Component {

  render () {
    return (
      <Grid>
        <PageHeader>Reports</PageHeader>
        <Nav bsStyle='tabs' activeKey={this.props.activeTab} onSelect={this.props.onTabSelect}
          style={{marginBottom: '10px'}}>
          <NavItem eventKey='agency'>Agency</NavItem>
          <NavItem eventKey='routes'>Routes</NavItem>
          <NavItem eventKey='stop'>Stops</NavItem>
        </Nav>
        {this.props.activeTab === 'agency' &&
          <Agency />
        }
        {this.props.activeTab === 'routes' &&
          <Routes />
        }
        {this.props.activeTab === 'stop' &&
          <Stops />
        }
      </Grid>
    )
  }
}
