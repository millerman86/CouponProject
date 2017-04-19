import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import uuid from 'uuid';
import Routes from './router.js';
// import { Router, browserHistory, ConnectedRouter} from 'react-router-redux';
// import promiseMiddleware from 'redux-promise'; routerMiddleware


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














function reducer(state, action) {
    if (action.type === 'ADD_COUPON') {
        const newCoupon = {
            id: uuid.v4(),
            deal: action.deal,
            offer: action.offer,
            condition: action.condition,
            disclaimer: action.disclaimer,
        };
        return {
            coupons: state.coupons.concat(newCoupon)
        };
    } else {
        return state;
    }
}

