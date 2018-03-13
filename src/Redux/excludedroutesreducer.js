import React from 'react';



import {ADD_EXCLUDED_ROUTE, REMOVE_EXCLUDED_ROUTE} from '../Redux/actions';





let initialState = ['advertise'];



//// Note here how you don't have to specify initial state as the first argument, since I'm doing it in the createStore function
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXCLUDED_ROUTE:
      return {
        excludedRoutes: [
          action.route // since the result will be only login, advertise will no longer be excluded
        ]
      };
    case REMOVE_EXCLUDED_ROUTE:
      return {
        excludedRoutes: state.excludedRoutes.filter(excludedRoute => excludedRoute !== action.route)
      };
    default:
      return state;
  }
}
