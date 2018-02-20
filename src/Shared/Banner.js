import React from 'react';



const Banner = ({ component, ...rest }) => (
  <div className='Banner'>
    <p className='banner-text'>Coupon Market</p>
    <div className="logout-button">
      {/*<PrivateRoute path='/' component={logoutButton} />*/}
    </div>
  </div>
);

export default Banner;
