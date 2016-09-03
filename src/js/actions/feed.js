import axios from 'axios'

import { config } from '../config'
import { compose, feed } from '../graphql/query'


export function fetchFeed() {
  return {
    type: 'FETCH_FEED',
    payload: axios.get(compose(feed, { feedId: config.feedId }))
  }
}
