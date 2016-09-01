import React from 'react'
import { Grid, PageHeader, Nav, NavItem } from 'react-bootstrap'


export default class PageLayout extends React.Component {

  render () {
    return (
      <Grid>
        <PageHeader>Reports</PageHeader>
        <Nav bsStyle='tabs' activeKey='agency' onSelect={this.props.onTabSelect}>
          <NavItem eventKey='agency'>Agency</NavItem>
          <NavItem eventKey='route'>Route</NavItem>
          <NavItem eventKey='stop'>Stop</NavItem>
        </Nav>
        {this.props.activeTab === 'agency' &&
          <div>Agency Content</div>
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
