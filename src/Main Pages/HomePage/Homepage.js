/**
 * Created by amrenmiller on 4/6/17.
 */

import React from 'react';


import CouponHomePageDataContainer from './CouponHomePageDataContainer/CouponHomePageDataContainer.js';

import '../../App.css';


import CouponCard from './CouponPresentationalComponents/CouponCard';

import Coupons from './CouponPresentationalComponents/Coupons';

import CouponFilter from './CouponPresentationalComponents/CouponFilter';

import blender from './../../../public/images/blender.jpg';
import books from './../../../public/images/books.jpg';
import chocolatecake from './../../../public/images/chocolate-cake.jpg';
import clothes from './../../../public/images/clothes.jpg';
import computer from './../../../public/images/computer.jpg';
import cupcakes  from './../../../public/images/cupcakes.jpg';
import food from './../../../public/images/food.jpg';
import headphones from './../../../public/images/headphones.jpg';
import lamp from './../../../public/images/lamp.jpg';
import recordplayer from './../../../public/images/recordplayer.jpg';
import scooter from './../../../public/images/scooter.jpg';
import soda from './../../../public/images/soda.jpg';
import speakers from './../../../public/images/speakers.jpg';
import strawberrycake8inch from './../../../public/images/strawberry-cake-8-inch.jpg';
import table from './../../../public/images/table.jpg';
import toys from './../../../public/images/toys.jpg';


// UNTIL FURTHER NOTICE, THE PICTURES USED BELOW ARE RANDOM AND FOR PURELY COSMETIC REASONS
let products = [
  blender,
  books,
  chocolatecake,
  clothes,
  computer,
  cupcakes,
  food,
  headphones,
  lamp,
  recordplayer,
  scooter,
  soda,
  speakers,
  strawberrycake8inch,
  table,
  toys, blender,
  books,
  chocolatecake,
  clothes,
  computer,
  cupcakes,
  food,
  headphones,
  lamp,
  recordplayer,
  scooter,
  soda,
  speakers,
  strawberrycake8inch,
  table,
  toys, blender,
  books,
  chocolatecake,
  clothes,
  computer,
  cupcakes,
  food,
  headphones,
  lamp,
  recordplayer,
  scooter,
  soda,
  speakers,
  strawberrycake8inch,
  table,
  toys, blender,
  books,
  chocolatecake,
  clothes,
  computer,
  cupcakes,
  food,
  headphones,
  lamp,
  recordplayer,
  scooter,
  soda,
  speakers,
  strawberrycake8inch,
  table,
  toys,
];



class HomePage extends CouponHomePageDataContainer { // THIS EXTENDS THE COUPONHOMEPAGEDATACONTAINERCLASS, MEANING ALL METHODS, WHICH ARE USED TO FETCH DATA

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className="col-md-2">


            {/*ALL OF THE COMPONENTS BELOW ARE SIMPLY THE PRESENTATIONAL LAYER OF THE DATA THAT COMES IN FROM THE DATABASE*/}

            {/*ALTHOUGH IT MAY SEEM A LITTLE BIT EXCESSIVE, THE COUPONHOMEPAGEDATACONTAINER IS WHAT CONTROLS THE DATA FETCHING, SO THEY ARE PASSED FROM PARENT TO CHILD*/}
            <CouponFilter priceFilter={this.updatePriceFilter}
                          companyFilter={this.updateCompanyFilter}
                          productFilter={this.updateProductFilter}
                          dealFilter={this.updateDealFilter}
                          forwardPress={this.forwardPress}
                          backwardPress={this.backwardPress}
                          pageBase={this.state.pageBase}
                          resultsPerPage={this.state.resultsPerPage} />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 coupon-wrapper--left">

                <CouponCard couponView={this.state.regularCoupons}
                            couponClip={this.handleCouponClip}
                            products={products} />

              </div>

              <div className="col-md-3 coupon-wrapper--right text-center">

                <Coupons
                  coupons={this.state.featuredCoupons} />

              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;


// IF YOU WOULD LIKE TO RENDER THE SUPER CLASS' RENDER BODY, USE {SUPER.RENDER()}
// All OTHER METHODS ARE AVAILABLE USING THIS.<SUPERMETHOD'S NAME>
