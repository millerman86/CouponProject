import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './Redux';


import App from './App.js'






// This accepts the reducer and initialState as two arguments
let store = createStore(rootReducer);















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
