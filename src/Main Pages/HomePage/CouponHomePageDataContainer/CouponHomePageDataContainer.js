import React from 'react';


import DataBaseEndPoint from '../../../DataBaseEndPoint';
import {clipCoupon} from '../../../Redux/actions';




const getUser = () => {
  return sessionStorage.getItem('username');
};


class CouponHomePageDataContainer extends React.Component {


  state = {
    featuredCoupons: [],
    regularCoupons: [],
    pageBase: '',
    resultsPerPage: '',
  };


  forwardPress = (e = 16) => {
    if (parseInt(e, 10) >= 16) {
      fetch(`${DataBaseEndPoint}/v1/coupons?page=${e}&direction=increase`)
        .then(function (response) {
          return response.json()
        }).then((coupons) => {
        this.setState({regularCoupons: coupons[0].regular});
        this.setState({pageBase: coupons[0].pageBase});
        this.setState({resultsPerPage: coupons[0].pageSize});
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    } else {
      console.log('YOU FOUND ME!');
    }
  };

  backwardPress = (e = 0) => {
      fetch(`${DataBaseEndPoint}/v1/coupons?page=${e}&direction=decrease`)
        .then(function (response) {
          return response.json()
        }).then((coupons) => {
        this.setState({featuredCoupons: coupons[0].featured});
        this.setState({regularCoupons: coupons[0].regular});
        this.setState({pageBase: coupons[0].pageBase});
        this.setState({resultsPerPage: coupons[0].pageSize});
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })

  };


  updateCompanyFilter = (e) => {
    fetch(`${DataBaseEndPoint}/v1/coupons?company=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      this.setState({regularCoupons: coupons});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  updatePriceFilter = (e, pageBase = 0, direction = 'increase') => {
    fetch(`${DataBaseEndPoint}/v1/coupons?price=${e}&pageBase=${pageBase}&direction=${direction}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({pageBase: coupons[0].pageBase});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    });
  };

  updateDealFilter = (e) => {
    fetch(`${DataBaseEndPoint}/v1/coupons?deal=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({featuredCoupons: coupons[0].featured});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  updateProductFilter = (e) => {
    fetch(`${DataBaseEndPoint}/v1/coupons?product=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({featuredCoupons: coupons[0].featured});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  handleCouponClip = (couponId, coupon) => {
    console.log(couponId, coupon);
    let payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        couponId: couponId,
        customer: getUser()
      })
    };

    fetch(`${DataBaseEndPoint}/v1/clipped`, payload)
      .then(function (response) {
        return response.json()
      }).then((reply) => {
      // WHEN THE COUPON IS SUCCESSFULLY CLIPPED, THEN PERSIST THE COUPON TO THE LOCAL STORAGE
      if (reply.message === 'USER NOT FOUND') return;
      console.log('SENDING YOUR COUPON TO THE REDUX STORE', coupon);


      this.props.dispatch(clipCoupon(coupon)); // THIS SHOULD WORK JUST FINE, BUT THE CONNECT FUNCTION HAPPENS FROM HOMEPAGE


      this.setState({regularCoupons: reply.regular});
      this.setState({featuredCoupons: reply.featured});
      this.forceUpdate();
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  componentDidMount() {
    fetch(`${DataBaseEndPoint}/v1/coupons`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      this.setState({featuredCoupons: coupons[0].featured});
      this.setState({regularCoupons: coupons[0].regular});

      this.setState({pageBase: coupons[0].pageBase});
      this.setState({resultsPerPage: coupons[0].pageSize});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };
}

export default CouponHomePageDataContainer;


