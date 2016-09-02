export function compose (query, variables) {
  return `http:\//localhost:4567/api/graphql?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify(variables))}`
}

export const routes = `
query routeQuery($feedId: [String]) {
  feeds (feed_id: $feedId) {
    routes {
      route_id
      route_short_name
      route_long_name
    }
  }
}
`
