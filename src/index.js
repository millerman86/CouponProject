import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import App from './App.js';
import {createStore} from 'redux';

import {ADD_EXCLUDED_ROUTE} from './Actions/actions';




let initialState = {excludedRoutes: []};



//// Note here how you don't have to specify initial state as the first argument, since I'm doing it in the createStore function
function reducer(state = initialState, action) {
  if (action.type === ADD_EXCLUDED_ROUTE) {
    return {
      excludedRoutes: state.excludedRoutes.concat(action.route),
    };
  } else {
    return state;
  }
}


//
// function myApp() {
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//
//   return state
// }



// This accepts the reducer and initialState as two arguments
let store = createStore(reducer);



const unsubscribe = store.subscribe(() => console.log(store.getState()));



console.log(store.getState());


injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);



