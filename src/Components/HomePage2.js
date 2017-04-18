/**
 * Created by amrenmiller on 4/6/17.
 */

import React, {Component} from 'react';

// import ReactDOM from 'react-dom';
import CouponContainer from '../App.js';
import { Link } from 'react-router-dom';
import {

    Route,
    Redirect,
} from 'react-router-dom';



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



const Banner = ({ component, ...rest }) => (
    <div className='Banner'>
       <PrivateRoute path='/' component={logoutButton} />
    </div>
);


class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner logoutVisible={myAuth.isAuthenticated()}/>
                <div className="ui seven buttons">
                    <button className='ui button'><Link to='/homepage'><span className='black-letters'><i className='home icon'></i>Home</span></Link></button>
                    <button className="ui button"><Link to='/redirects'><span className='black-letters'><i className='location arrow icon'></i>Local</span></Link></button>
                    <button className='ui button'><Link to='/clearance'><span className='black-letters'><i className="dollar icon"></i>Clearance</span></Link></button>
                    <button className='ui button'><Link to='/search'><span className='black-letters'><i className='find icon'></i>Search Coupons</span></Link></button>
                    <button className='ui button'><Link to='/login'><span className='black-letters'><i className='empty star icon'></i>Login</span></Link></button>
                    <button className='ui button'><Link to='/advertise'><span className='black-letters'><i className='announcement icon'></i>ADVERTISE</span></Link></button>
                </div>
                <CouponContainer />
            </div>
        );
    }
}

export default HomePage;
