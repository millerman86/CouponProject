import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Routes from './router.js';


injectTapEventPlugin();


function dummyreducer(state = [], action = {type: 'ADD_TODO'}) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}


const initialState = {coupons: []};

const store = createStore(dummyreducer, initialState);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);



