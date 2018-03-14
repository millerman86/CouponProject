import React from 'react';
import {combineReducers} from 'redux';
import excludedRoutes from './excludedroutesreducer'
import visibilityFilter from './visibilityfilterreducer'
import clipCouponReducer from './clipcouponreducer';


const rootReducer = combineReducers({
  excludedRoutes,
  visibilityFilter,
  coupons: clipCouponReducer
});

export default rootReducer;
