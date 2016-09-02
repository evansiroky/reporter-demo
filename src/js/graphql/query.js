export function compose (query, variables) {
  return `http:\//localhost:4567/api/graphql?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`
}

export const routes = `
query routeQuery($feedId: [String]) {
  routes(feed_id: $feedId) {
    route_id
    route_short_name
    route_long_name,
    route_desc,
    route_url
  }
}
`

export const patternsOfRoute = `
query routeQuery($feedId: [String], $routeId: [String]) {
  routes(feed_id: $feedId, route_id: $routeId) {
    patterns {
      pattern_id,
      name
    }
  }
}
`

export const stopsOfPattern = `
query routeQuery($feedId: [String],  $patternId: [String]) {
  patterns(feed_id: $feedId, pattern_id: $patternId) {
    stops {
      stop_id,
      stop_name,
      stop_name,
      stop_code,
      stop_desc,
      stop_lon,
      stop_lat,
      zone_id,
      stop_url,
      stop_timezone
    }
  }
}
`
