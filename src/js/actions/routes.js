import axios from 'axios'

import { compose, routes } from '../graphql/query'


export function fetchRoutes() {
  return {
    type: 'FETCH_ROUTES',
    payload: axios.get(compose(routes, { feedId: 'cc' }))
  }
}
