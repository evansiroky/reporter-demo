import axios from 'axios'

import { config } from '../config'
import { compose, routes } from '../graphql/query'


export function fetchRoutes() {
  return {
    type: 'FETCH_ROUTES',
    payload: axios.get(compose(routes, { feedId: config.feedId }))
  }
}
