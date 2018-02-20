// import React from 'react';
//
// import Router from './Router/Router';
//
//
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
