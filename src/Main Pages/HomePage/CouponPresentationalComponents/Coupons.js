import React from 'react';



const Coupons = (props) => (

  <div className="CouponContainer text-center">
    <h1>Featured Deals</h1>
    {
      props.coupons.map((coupon, index) => (
        <div
          key={index}
          className="Coupon"
        >
          <div className="Deal">
            {coupon.deal}
            <br />
          </div>
          <div className="Offer">
            {coupon.offer}
          </div>
          <div className="Condition">
            {coupon.condition}
          </div>
          <br />
          <div className="Disclaimer">
            {coupon.disclaimer}
          </div>
          <div className="Barcode">
            <i className='barcode icon' />
          </div>
        </div>
      ))
    }
  </div>
);


export default Coupons;
