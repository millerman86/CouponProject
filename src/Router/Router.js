import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from '../Main Pages/HomePage/Homepage.js';
import React from 'react';
import Login from '../Main Pages/Login/Login.js';
import SubmitCoupons from '../Main Pages/SubmitCoupons/SubmitCoupons.js';
import CreateAccount from '../Main Pages/CreateAccount/CreateAccount.js';
import Clearance from '../Main Pages/Clearance/Clearance';

import AdvertiseSwitch from '../Main Pages/Advertise/Advertise.js';


import PrivateRoute from './PrivateRouteComponent';

export default () => (
    <Router history={null}>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/homepage' component={HomePage}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/submitcoupons' component={SubmitCoupons}/>
                <Route exact path='/createaccount' component={CreateAccount}/>
                <Route exact path='/clearance' component={Clearance}/>

                <PrivateRoute path='/advertise' component={AdvertiseSwitch}/>

            </Switch>

    </Router>
);


