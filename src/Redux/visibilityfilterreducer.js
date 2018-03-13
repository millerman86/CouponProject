import React from 'react';
import {VisibilityFilters, SET_VISIBILITY_FILTER} from './actions';


// INITIAL STATE IS 'SORT-PRODUCTS'
const initialState = 'SORT_PRODUCTS';


export default function visibilityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log(action.filter);

      return action.filter;

    default:
      return state
  }
};

