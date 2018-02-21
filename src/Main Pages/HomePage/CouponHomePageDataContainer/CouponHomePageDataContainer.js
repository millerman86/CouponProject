import React from 'react';


import DataBaseEndPoint from '../../../DataBaseEndPoint';


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
    if (parseInt(e) >= 16) {
      fetch(`${DataBaseEndPoint}/v1/coupons?page=${e}&direction=increase`)
        .then(function (response) {
          return response.json()
        }).then((coupons) => {
        console.log('parsed coupons', coupons);
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
    if (e = 0) {
      console.log('hello');
    } else {
      fetch(`${DataBaseEndPoint}/v1/coupons?page=${e}&direction=decrease`)
        .then(function (response) {
          return response.json()
        }).then((coupons) => {
        console.log('parsed coupons', coupons);
        this.setState({featuredCoupons: coupons[0].featured});
        this.setState({regularCoupons: coupons[0].regular});
        this.setState({pageBase: coupons[0].pageBase});
        this.setState({resultsPerPage: coupons[0].pageSize});
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
  };


  updateCompanyFilter = (e) => {
    console.log('in update company');
    fetch(`${DataBaseEndPoint}/v1/coupons?company=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({regularCoupons: coupons});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  updatePriceFilter = (e, pageBase = 0, direction = 'increase') => {
    console.log('in update price');
    fetch(`${DataBaseEndPoint}/v1/coupons?price=${e}&pageBase=${pageBase}&direction=${direction}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({pageBase: coupons[0].pageBase});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    });
  };

  updateDealFilter = (e) => {
    console.log('in update price');
    fetch(`${DataBaseEndPoint}/v1/coupons?deal=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({featuredCoupons: coupons[0].featured});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  updateProductFilter = (e) => {
    console.log('in update product');
    fetch(`${DataBaseEndPoint}/v1/coupons?product=${e}`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({featuredCoupons: coupons[0].featured});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  handleCouponClip = (couponId) => {
    console.log(getUser(), couponId + 'weoiuj');

    let payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        couponId,
      })
    };

    fetch(`${DataBaseEndPoint}/v1/clipped/${getUser()}`, payload)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({regularCoupons: coupons[0].regular});
      this.setState({featuredCoupons: coupons[0].featured});
      this.forceUpdate();
      console.log(this.state.regularCoupons);
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  componentDidMount() {
    fetch(`${DataBaseEndPoint}/v1/coupons`)
      .then(function (response) {
        return response.json()
      }).then((coupons) => {
      console.log('parsed coupons', coupons);
      this.setState({featuredCoupons: coupons[0].featured});
      this.setState({regularCoupons: coupons[0].regular});

      console.log(coupons[0].pageBase);
      console.log(coupons[0].pageSize);
      this.setState({pageBase: coupons[0].pageBase});
      this.setState({resultsPerPage: coupons[0].pageSize});
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };
}

export default CouponHomePageDataContainer;
