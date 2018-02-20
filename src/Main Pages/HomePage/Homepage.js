/**
 * Created by amrenmiller on 4/6/17.
 */

import React, {Component} from 'react';


import CouponContainer from './CouponContainer/CouponContainer.js';
import { Link } from 'react-router-dom';
import {

    Route,
    Redirect,
} from 'react-router-dom';

import '../../App.css';



const myAuth = {
    isAuthenticated: function () {
        const result = sessionStorage.getItem('token');
        return !!result;
    },

    logout: function () {
        sessionStorage.removeItem('token');
    }
};



const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        myAuth.isAuthenticated() ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/HomePage',
                    state: { from: props.location }
                }}/>
            )
    )}/>
);


const logoutButton = () => (
    <div>
        <p>
            Welcome! <button onClick={() => {
            myAuth.logout(() => history.push('/'));
        }}>Sign out</button>
        </p>
    </div>
);



class HomePage extends Component {
    render() {
        return (
            <div>

                <CouponContainer />

                <div className='footer'>
                    <a href='#'>Amren Miller</a>
                    <br />
                    <a href='#'>(801)634-5110</a>
                    <br />
                    <a href='#'>amrenmiller@gmail.com</a>
                    <br />
                    <br />
                    <br />

                </div>
            </div>
        );
    }
}

export default HomePage;
