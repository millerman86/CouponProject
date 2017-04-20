import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import uuid from 'uuid';
import Routes from './router.js';


injectTapEventPlugin();


const initialState = {coupons: []};

const store = createStore(reducer, initialState);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);



