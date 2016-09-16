import { expect } from 'chai'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Loading from '../../../src/js/components/common/Loading'

describe('Loading component', function () {
  it('renders without problems', function () {
    const elem = TestUtils.renderIntoDocument(<Loading/>)
    expect(elem).to.exist
  })
})
