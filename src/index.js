import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import {ADD_EXCLUDED_ROUTE, REMOVE_EXCLUDED_ROUTE} from './Actions/actions';

import App from './App.js'









let initialState = {excludedRoutes: ['advertise']};


//// Note here how you don't have to specify initial state as the first argument, since I'm doing it in the createStore function
function rootReducer(state, action) {
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


// This accepts the reducer and initialState as two arguments
let store = createStore(rootReducer, initialState);















injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);









































//
// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router>
//       <Route path="/" component={App} />
//     </Router>
//   </Provider>
// );
//
//
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
//
//
//
// console.log(store.getState());
