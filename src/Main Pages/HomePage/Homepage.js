/**
 * Created by amrenmiller on 4/6/17.
 */

import React, {Component} from 'react';


import CouponDataContainer from './CouponDataContainer/CouponDataContainer.js';

import '../../App.css';


class HomePage extends CouponDataContainer { // THIS EXTENDS THE COUPONDATACONTAINERCLASS, MEANING ALL METHODS AND THE RENDER FUNCTION

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>


        {super.render()}


        {/*THIS COMPONENT INDEPENDENTLY IMPORTS ITS OWN PRESENTATIONAL COMPONENTS AND MAKES INDEPENDENT DATABASE REQUESTS USING COMPONENTDIDMOUNT AND FETCHING*/}
      </div>
    );
  }
}

export default HomePage;


// IF YOU WOULD LIKE TO RENDER THE SUPER CLASS' RENDER BODY, USE {SUPER.RENDER()}
// All OTHER METHODS ARE AVAILABLE USING THIS.<SUPERMETHOD'S NAME>
