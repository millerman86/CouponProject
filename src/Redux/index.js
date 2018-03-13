import React from 'react';
import {combineReducers} from 'redux';
import excludedRoutes from './excludedroutesreducer'




const rootReducer = combineReducers({
  excludedRoutes
});

export default rootReducer;
