import React from 'react';
import {combineReducers} from 'redux';
import excludedRoutes from './excludedroutesreducer'
import visibilityFilter from './visibilityfilterreducer'



const rootReducer = combineReducers({
  excludedRoutes,
  // visibilityFilter
});

export default rootReducer;
