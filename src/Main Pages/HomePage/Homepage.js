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

import MyAuth from '../../Authorization';




const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        MyAuth.isAuthenticated() ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/HomePage',
                    state: { from: props.location }
                }}/>
            )
    )}/>
);


const LogoutButton = () => (
    <div>
        <p>
            Welcome! <button onClick={() => {
            MyAuth.logout(() => history.push('/'));
        }}>Sign out</button>
        </p>
    </div>
);



class HomePage extends Component {
    render() {
        return (
            <div>


                {/*THIS COMPONENT INDEPENDENTLY IMPORTS ITS OWN PRESENTATIONAL COMPONENTS AND MAKES INDEPENDENT DATABASE REQUESTS USING COMPONENTDIDMOUNT AND FETCHING*/}
                <CouponContainer />



            </div>
        );
    }
}

export default HomePage;
