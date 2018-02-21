import React from 'react';
import '../../../App.css';
import blender from '../../../../public/images/blender.jpg';
import books from '../../../../public/images/books.jpg';
import chocolatecake from '../../../../public/images/chocolate-cake.jpg';
import clothes from '../../../../public/images/clothes.jpg';
import computer from '../../../../public/images/computer.jpg';
import cupcakes  from '../../../../public/images/cupcakes.jpg';
import food from '../../../../public/images/food.jpg';
import headphones from '../../../../public/images/headphones.jpg';
import lamp from '../../../../public/images/lamp.jpg';
import recordplayer from '../../../../public/images/recordplayer.jpg';
import scooter from '../../../../public/images/scooter.jpg';
import soda from '../../../../public/images/soda.jpg';
import speakers from '../../../../public/images/speakers.jpg';
import strawberrycake8inch from '../../../../public/images/strawberry-cake-8-inch.jpg';
import table from '../../../../public/images/table.jpg';
import toys from '../../../../public/images/toys.jpg';

import DataBaseEndPoint from '../../../DataBaseEndPoint';

import CouponCard from '../CouponPresentationalComponents/CouponCard';

import Coupons from '../CouponPresentationalComponents/Coupons';

import CouponFilter from '../CouponPresentationalComponents/CouponFilter';


const getUser = () => {
    return sessionStorage.getItem('username');
};




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



class CouponDataContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            featuredCoupons: [],
            regularCoupons: [],
            pageBase: '',
            resultsPerPage: '',
        };
    }

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

    forwardPress = (e = 16) => {

        console.log(e);
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


    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-2">


                        {/*ALL OF THE COMPONENTS BELOW ARE SIMPLY THE PRESENTATIONAL LAYER OF THE DATA THAT COMES IN FROM THE DATABASE*/}
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
        )
    }
}

export default CouponDataContainer;
