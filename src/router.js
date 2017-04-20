import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage2.js';
import React from 'react';
import Login from './Components/login.js';
import AdvertiseSwitch from './Components/advertise.js';
import SubmitCoupons from './Components/submitcoupons.js';
import {Redirect} from 'react-router-dom';
import CreateAccount from './Components/createaccount.js';
import Clearance from './Components/clearance';

const myAuth = {
    isAuthenticated: function () {
        const result = sessionStorage.getItem('token');
        return !!result;
    }
};



const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        myAuth.isAuthenticated ? (
                React.createElement(component, props)
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
    )}/>
);



export default () => (
<Router>
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/homepage' component={HomePage} />
            <Route path='/login' component={Login} />
            <PrivateRoute component={AdvertiseSwitch}
                          path='/advertise'/>
            <Route path='/submitcoupons' component={SubmitCoupons} />
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/clearance' component={Clearance} />
        </Switch>
    </div>
</Router>
);


