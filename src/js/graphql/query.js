export function compose (query, variables) {
  return `http:\//localhost:4567/api/graphql?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`
}

export const feed = `
query feedQuery($feedId: [String]) {
  feeds (feed_id: $feedId) {
    feed_id,
    feed_publisher_name,
    feed_publisher_url,
    feed_lang,
    feed_version,
    route_count,
    stop_count
  }
}
`

export const routes = `
query routeQuery($feedId: [String]) {
  routes(feed_id: $feedId) {
    route_id
    route_short_name
    route_long_name,
    route_desc,
    route_url,
    trip_count,
    pattern_count
  }
}
`

export const patterns = `
query patternsQuery($feedId: [String], $routeId: [String]) {
  routes (feed_id: $feedId, route_id: $routeId) {
    route_id,
    route_short_name,
    route_long_name,
    patterns {
      pattern_id,
      name,
      stop_count,
      trip_count
    }
  }
}
`

export const allStops = `
query allStopsQuery($feedId: [String]) {
  stops(feed_id: $feedId) {
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


export const stopsFiltered = `
query filteredStopsQuery($feedId: [String], $routeId: [String], $patternId: [String]) {
  routes(feed_id: $feedId, route_id: $routeId) {
    patterns(pattern_id: $patternId) {
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
}
`
