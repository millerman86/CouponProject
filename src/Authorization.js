import React from 'react';



const MyAuth = {
  isAuthenticated: function () {
    const result = sessionStorage.getItem('token');
    return !!result; // THIS ONLY CHECKS FOR THE PRESENCE OF THE TOKEN
  },

  logout: function () {
    sessionStorage.removeItem('token');
  },

  getToken: function () {
    return sessionStorage.getItem('token');
  }
};



export default MyAuth;
