import React from 'react';

import Routes from './Router/Router';


import Banner from './Shared/Banner';
import Navigation from './Shared/Navigation';



const myAuth = {
  isAuthenticated: function () {
    const result = sessionStorage.getItem('token');
    return !!result;
  },

  logout: function () {
    sessionStorage.removeItem('token');
  }
};





export default () => (
  <div>
    <Banner logoutVisible={myAuth.isAuthenticated()}/>
    <Navigation />
    <Routes />
  </div>
);

//
//
// const myAuth = {
//   isAuthenticated: function () {
//     const result = sessionStorage.getItem('token');
//     return !!result;
//   },
//
//   logout: function () {
//     sessionStorage.removeItem('token');
//   }
// };
//
//
//
// const Banner = ({ component, ...rest }) => (
//   <div className='Banner'>
//     <p className='banner-text'>Coupon Market</p>
//     <div className="logout-button">
//       {/*<PrivateRoute path='/' component={logoutButton} />*/}
//     </div>
//
//   </div>
// );
//
//
// export default (
//   <div>
//     <Banner logoutVisible={myAuth.isAuthenticated()} />
//     <Router history={null} />
//   </div>
// );
