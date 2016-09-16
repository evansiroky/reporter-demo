import { expect } from 'chai'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import PageLayout from '../../src/js/components/PageLayout'

describe('PageLayout component', function () {
  it('renders without problems', function () {
    const elem = TestUtils.renderIntoDocument(<PageLayout/>)
    expect(elem).to.exist
  })
})
