import React from 'react';

import Routes from './Router/Router';


import Banner from './Shared/Banner';
import Navigation from './Shared/Navigation';
import Footer from './Shared/Footer';


import MyAuth from './Authorization';




export default () => (
  <div>

    <Banner logoutVisible={MyAuth.isAuthenticated()}/>
    <Navigation />
    <Routes />
    <Footer />

  </div>
);
