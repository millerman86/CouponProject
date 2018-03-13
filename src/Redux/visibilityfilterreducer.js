import React from 'react';
import {VisibilityFilters, SET_VISIBILITY_FILTER} from './actions';


// INITIAL STATE IS 'SORT-PRODUCTS'
const initialState = ['SORT_PRICE'];


export default function visibilityReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_VISIBILITY_FILTER:
    //   return {
    //    visibilityFilter: [
    //     action.filter
    //    ]
    //   };
    default:
      return state
  }
};

