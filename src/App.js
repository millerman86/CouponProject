import React from 'react';


import Routes from './Router/Router';


import Banner from './Shared/Banner';
import Navigation from './Shared/Navigation';
import Footer from './Shared/Footer';


import MyAuth from './Authorization';






let excludedRoutes = [];







export default () => (
  <div>

    <Banner logoutVisible={MyAuth.isAuthenticated()}/>
    <Navigation excludedRoutes={excludedRoutes}/>
    <Routes />
    <Footer />

  </div>
);


// TODO
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
