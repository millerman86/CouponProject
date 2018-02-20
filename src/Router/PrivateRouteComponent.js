import {Redirect} from 'react-router-dom';
import React from 'react';
import Route from 'react-router-dom';



const myAuth = {
  isAuthenticated: function () {
    const result = sessionStorage.getItem('token');
    return !!result;
  }
};


const PrivateRoute = ({component, ...rest}) => (
  <Route {...rest} render={props => (
    myAuth.isAuthenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
      )
  )}/>
);


export default PrivateRoute;
