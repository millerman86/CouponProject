export const ADD_EXCLUDED_ROUTE = 'ADD_EXCLUDED_ROUTE';
export const REMOVE_EXCLUDED_ROUTE = 'REMOVE_EXCLUDED_ROUTE';



export function addExcludedRoute(route) {
  console.log('ADDING EXCLUDED ROUTE', route);
  return { type: ADD_EXCLUDED_ROUTE, route }
}

export function removeExcludedRoute(route) {
  return { type: REMOVE_EXCLUDED_ROUTE, route}
}


