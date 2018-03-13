import React from 'react';


export const ADD_EXCLUDED_ROUTE = 'ADD_EXCLUDED_ROUTE';
export const REMOVE_EXCLUDED_ROUTE = 'REMOVE_EXCLUDED_ROUTE';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export function addExcludedRoute(route) {
  return {
    type: ADD_EXCLUDED_ROUTE,
    route
  }
}

export function removeExcludedRoute(route) {
  return {
    type: REMOVE_EXCLUDED_ROUTE,
    route
  }
}


export function filterByPrice(price) {
  return {
    type: VisibilityFilters.SORT_PRICE,
    price
  }
}


export function filterByProducts(product) {
  return {
    type: VisibilityFilters.SORT_PRODUCTS,
    product
  }
}


export function filterByCompany(company) {
  return {
    type: VisibilityFilters.SORT_COMPANY,
    company

  }
}


export function filterByShipping(shipping) {
  return {
    type: VisibilityFilters,
    shipping
  }
}



export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});


export const VisibilityFilters = {
  SORT_PRODUCTS: 'SORT_PRODUCTS',
  SORT_PRICE: 'SORT_PRICE',
  SORT_COMPANY: 'SORT_COMPANY',
  SORT_SHIPPING: 'SORT_SHIPPING'
};
