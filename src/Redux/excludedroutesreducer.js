import {ADD_EXCLUDED_ROUTE, REMOVE_EXCLUDED_ROUTE} from '../Redux/actions';


let initialState = ['advertise'];

// ACCESSING STATE IN THIS FUNCTION IS JUST BY USING THE VARIABLE STATE, AND NOT STATE.EXCLUDEDROUTES
// REMEMBER THAT WHEN YOU ARE OPERATING ON THIS SPECIFIC REDUCER, YOU ARE ONLY RETURNING ONE PORTION OF STATE, NOT MULTIPLE
//// Note here how you don't have to specify initial state as the first argument, since I'm doing it in the createStore function
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXCLUDED_ROUTE:
      if (!state.includes(action.route)) {
        return [
          ...state,
          action.route
        ]
      } return [...state];

    case REMOVE_EXCLUDED_ROUTE:
      return state.filter(excludedRoute => excludedRoute !== action.route );
    default:
      return state;
  }
}
