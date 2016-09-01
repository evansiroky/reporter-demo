import React from 'react'
import { Grid, PageHeader, Nav, NavItem } from 'react-bootstrap'

import Agency from '../containers/Agency'


export default class PageLayout extends React.Component {

  render () {
    return (
      <Grid>
        <PageHeader>Reports</PageHeader>
        <Nav bsStyle='tabs' activeKey={this.props.activeTab} onSelect={this.props.onTabSelect}
          style={{marginBottom: '10'}}>
          <NavItem eventKey='agency'>Agency</NavItem>
          <NavItem eventKey='route'>Route</NavItem>
          <NavItem eventKey='stop'>Stop</NavItem>
        </Nav>
        {this.props.activeTab === 'agency' &&
          <Agency />
        }
        {this.props.activeTab === 'route' &&
          <div>Route Content</div>
        }
        {this.props.activeTab === 'stop' &&
          <div>Stop Content</div>
        }
      </Grid>
    )
  }
}
