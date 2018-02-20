import React from 'react';


const CouponCard = (props) => (
  <div className="CouponViewContainer">
    {
      props.couponView.map((coupon, index) => (
        <div
          key={index}
          className="CouponCard float-left"
        >
          <div className="coupon-card--image-wrap">
            <img src={props.products[index]}/>
            <div className="coupon-card--company col-xs-3">
              {coupon.company}
            </div>
          </div>
          <div className="coupon-card--meta row">

            <div className="coupon-card--price col-xs-12">
              {coupon.deal}
              <div className='float-right'>
                ${coupon.price.includes('.00') ? parseInt(coupon.price) : coupon.price}
              </div>
              <div className='description'>
                {coupon.product}
              </div>
            </div>
          </div>
          <div className="coupon-card--free-shipping row">
            <br />
            <div className="col-xs-12">
              <div className="button"><span className="tiny-text">+ Free shipping</span></div>
            </div>
          </div>
          <div className="coupon-card--buttons row">
            <div className="col-xs-6 border-right">
              <div className="card-button text-center voting-button">
                <i className="icon-button icon-thumbs-up" /></div>
            </div>
            <div className="col-xs-6">
              <div className="card-button text-center comment-button">
                <i className="icon-button icon-comment" /></div>
            </div>

          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <div className="clip-button text-left">
                <button onClick={() => props.couponClip(coupon.id)}><i className="cut icon">
                </i>Clip
                </button>
                <span className='float-right coupon-code'>{coupon.id}</span></div>
            </div>
          </div>
        </div>
      ))
    }
  </div>
);


export default CouponCard;
