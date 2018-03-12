import React from 'react';

import Banner from './Shared/Banner';
import Navigation from './Shared/Navigation';


import { connect } from 'react-redux';

import {PropTypes} from 'prop-types';


import HomePage from './Main Pages/HomePage/Homepage.js';
import Login from './Main Pages/Login/Login.js';
import SubmitCoupons from './Main Pages/SubmitCoupons/SubmitCoupons.js';
import CreateAccount from './Main Pages/CreateAccount/CreateAccount.js';
import Clearance from './Main Pages/Clearance/Clearance';
import AdvertiseSwitch from './Main Pages/Advertise/Advertise';

import {
  BrowserRouter,
  Route,
  Redirect
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
      render={(props) => authorized === true ? (<Component {...props} />) : (<Redirect to={{pathname: '/login', state: {from: props.location}}} />)}
    />
  )
};


let App = ({excludedRoutes}) => (
  <BrowserRouter>
    <div className="">

      <Banner />
      <Navigation excludedRoutes={excludedRoutes} />

      <Route exact path='/' component={HomePage}/>
      <Route exact path='/homepage' component={HomePage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/submitcoupons' component={SubmitCoupons}/>
      <Route exact path='/createaccount' component={CreateAccount}/>
      <Route exact path='/clearance' component={Clearance}/>

      <PrivateRoute exact path='/advertise' authorized={myAuth.isAuthenticated()} component={AdvertiseSwitch}/>



    </div>
  </BrowserRouter>
);



App.propTypes = {
  excludedRoutes: PropTypes.array.isRequired
};




const mapStateToProps = (state) => ({
  excludedRoutes: state.excludedRoutes,
});




App = connect(
  mapStateToProps
)(App);

export default App;























// class App extends React.Component {
//
//
//   // THIS IS WHERE TO PUT THE LISTENER FOR WHEN THE STORE UPDATES WITH EXCLUDED ROUTES, SO THE NAVIGATION BAR CAN UPDATE WITH WHICH LINKS ARE CLICKABLE. PERHAPS NOT STRICTLY NECESSARY, BUT GOOD FOR PRACTICE
//
//
//
//
//   render() {
//     return (
//       <div>
//
//         <Banner logoutVisible={MyAuth.isAuthenticated()}/>
//         <Navigation excludedRoutes={this.props.excludedRoutes}/>
//         <Routes />
//         <Footer />
//
//       </div>
//     );
//   }
// }



//
//
// App.propTypes = {
//   excludedRoutes: PropTypes.array.isRequired
// };
//
//
//
//
// const mapStateToProps = (state) => ({
//   excludedRoutes: state.excludedRoutes,
// });
//
//
//
//
// const AppWithDynamicRouting = connect(
//   mapStateToProps
// )(App);
//
// export default AppWithDynamicRouting;
//
//
//
//
//
//
//
//
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

{/*FIGURE OUT A WAY TO MAKE THE NAVIGATION BAR CHANGE EVERY TIME THE EXCLUDEDROUTES ARRAY CHANGES. THE LOGIC IN THE NAVIGATION BAR IS ALREADY READY TO BE UTILIZED*/}
{/*FOR NOW AT LEAST, YOU CAN SEE ALL THE ROUTES IN THE NAVIGATION BAR, BUT /ADVERTISE IS HIDDEN BEHIND PRIVATE ROUTE LOGIC*/}












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
