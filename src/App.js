import React from 'react';

import Banner from './Shared/Banner';
import Navigation from './Shared/Navigation';


import {connect} from 'react-redux';


import HomePage from './Main Pages/HomePage/Homepage.js';
import Login from './Main Pages/Login/Login.js';
import SubmitCoupons from './Main Pages/SubmitCoupons/SubmitCoupons.js';
import CreateAccount from './Main Pages/CreateAccount/CreateAccount.js';
import Clearance from './Main Pages/Clearance';
import Local from './Main Pages/Local';
import Search from './Main Pages/Search';
import Clipped from './Main Pages/Clipped';

import AdvertiseSwitch from './Main Pages/Advertise/Advertise';
import Footer from './Shared/Footer';


import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


const myAuth = {
  isAuthenticated: function () {
    const result = sessionStorage.getItem('token');
    return !!result;
  }
};


// THIS FOR SURE WORKS
const PrivateRoute = ({component: Component, authorized, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authorized === true ? (<Component {...props} />) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}}/>)}
    />
  )
};

const My404Component = () => (
  <div className='center-align'>
    I'M SO SORRY, I CAN'T FIND YOUR PAGE!
  </div>
);


let App = () => {

  return (
  <BrowserRouter>
    <div>

      <Banner />
      <Navigation />

      <Switch>

        <Route exact path='/' component={HomePage}/>
        <Route exact path='/homepage' component={HomePage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/submitcoupons' component={SubmitCoupons}/>
        <Route exact path='/createaccount' component={CreateAccount}/>
        <Route exact path='/clearance' component={Clearance}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/local' component={Local}/>
        <Route exact path='/clipped' component={Clipped}/>

        <PrivateRoute exact path='/advertise' authorized={myAuth.isAuthenticated()} component={AdvertiseSwitch}/>

        <My404Component/>

      </Switch>



      <Footer />

    </div>
  </BrowserRouter>
)};



const mapStateToProps = (state) => ({
  excludedRoutes: state.excludedRoutes,
});


App = connect(
  mapStateToProps
)(App);

export default App;















// EVENTUALLY, THESE WILL HAVE TO BE A COMPOSITIONAL PART OF THE BANNER, BUT FOR NOW, JUST LEAVE THEM ALONE
//
// const PrivateRoute = ({ component, ...rest }) => (
//   <Route {...rest} render={props => (
//     MyAuth.isAuthenticated() ? (
//         React.createElement(component, props)
//       ) : (
//         <Redirect to={{
//           pathname: '/HomePage',
//           state: { from: props.location }
//         }}/>
//       )
//   )}/>
// );
//
//
// const LogoutButton = () => (
//   <div>
//     <p>
//       Welcome! <button onClick={() => {
//       MyAuth.logout(() => history.push('/'));
//     }}>Sign out</button>
//     </p>
//   </div>
// );
//


// EVENTUALLY, THESE WILL HAVE TO BE A COMPOSITIONAL PART OF THE BANNER, BUT FOR NOW, JUST LEAVE THEM ALONE
//
// const PrivateRoute = ({ component, ...rest }) => (
//   <Route {...rest} render={props => (
//     MyAuth.isAuthenticated() ? (
//         React.createElement(component, props)
//       ) : (
//         <Redirect to={{
//           pathname: '/HomePage',
//           state: { from: props.location }
//         }}/>
//       )
//   )}/>
// );
//
//
// const LogoutButton = () => (
//   <div>
//     <p>
//       Welcome! <button onClick={() => {
//       MyAuth.logout(() => history.push('/'));
//     }}>Sign out</button>
//     </p>
//   </div>
// );
//
