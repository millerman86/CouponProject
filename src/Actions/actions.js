export const ADD_EXCLUDED_ROUTE = 'ADD_EXCLUDED_ROUTE';
export const REMOVE_EXCLUDED_ROUTE = 'REMOVE_EXCLUDED_ROUTE';



export function addExcludedRoute(route) {
  console.log('EXCLUDING A ROUTE!!!!!!!!!!!!');
  return { type: ADD_EXCLUDED_ROUTE, route }
}

export function removeExcludedRoute(route) {
  return { type: REMOVE_EXCLUDED_ROUTE, route}
}




// Bound action creators
// const boundAddTodo = text => dispatch(addTodo(text))
// const boundCompleteTodo = index => dispatch(completeTodo(index))




