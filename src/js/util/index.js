export function getRouteName(route) {
  let name = ''
  if(route.route_short_name) {
    name += route.route_short_name
    if(route.route_long_name) {
      name += ' - '
    }
  }

  if(route.route_long_name) {
    name += route.route_long_name
  }

  return name
}
