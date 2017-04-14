import React from 'react';
import './App.css';
// import CouponContainer from './CouponContainer/coupons.js';
import mcdonalds from '../public/images/mcdonalds.png';
import MySlider from './Components/slider';

const CouponCard = (props) => (
    <div className="CouponViewContainer">
        {
            props.couponView.map((coupon, index) => (
                <div
                    key={index}
                    className="CouponCard float-left"
                >
                    <div className="coupon-card--image-wrap">
                        {/*<div divStyle="background-image: url("{mcdonaldsimg}")"></div> className="background-image"*/ }
                        <img src={mcdonalds}/>
                        <div className="coupon-card--company col-xs-3">
                            {coupon.company}
                        </div>
                    </div>
                    <div className="coupon-card--meta row">

                        <div className="coupon-card--price col-xs-12">
                            {coupon.deal}
                            <div className='float-right'>
                                {coupon.price}
                            </div>
                            <div className='description'>
                                {coupon.description}
                            </div>
                        </div>
                    </div>
                    <div className="coupon-card--free-shipping row">
                        <br />
                        <div className="col-xs-12">
                            <div className="button"><span className="tiny-text">+ Free Shipping</span></div>
                        </div>
                        {/*<div className="col-xs-6">*/}
                        {/*<div className="button"></div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="coupon-card--buttons row">
                        <div className="col-xs-6 border-right">
                            <div className="card-button text-center voting-button"><i
                                className="icon-button icon-thumbs-up"></i></div>
                        </div>
                        <div className="col-xs-6">
                            <div className="card-button text-center comment-button"><i
                                className="icon-button icon-comment"></i></div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <div className="clip-button text-left">Clip <input type='checkbox'></input>
                                <span className='col-xs-7 float-right coupon-code'>{coupon.code}263728391</span></div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);

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
                        <i className='barcode icon'></i>
                    </div>
                </div>
            ))
        }
    </div>
);


class CouponFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alphabet: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z'
            ]
        };
    }

    handleDealClick = (e) => {
        this.props.dealFilter(e);
    };

    handleCompanyLetterClick = (e) => {
        console.log(e);
        this.props.companyFilter(e);
    };

    handleProductLetterClick = (e) => {
        console.log(e);
        this.props.productFilter(e);
    };


    handlePriceAdjust = (e) => {
        this.props.priceFilter(e);
    };


    render() {
        return (
            <div className='coupon-filter--box'>
                <p className="coupon-filter--title">Filter Coupons</p>
                <div className='coupon-filter--filters'>
                    <p>By Company:</p>
                    <select onChange={(e) => this.handleCompanyLetterClick(e.target.value)}>
                        { this.state.alphabet.map((letter, i) =>
                            <option key={i}>{letter}</option>
                        ) }
                    </select>
                    <p>By Product</p>
                    <select onChange={(e) => this.handleProductLetterClick(e.target.value)}>
                        { this.state.alphabet.map((letter, i) =>
                            <option key={i}>{letter}</option>
                        ) }
                    </select>
                    <p>By deal</p>
                    <select onChange={(e) => this.handleDealClick(e.target.value)}>
                        <option>FREE</option>
                        <option>1/2 OFF</option>
                        <option>0-25%</option>
                    </select>
                    <br />
                    <br />
                    <p className='adjust-price'>Adjust Price</p>
                    <MySlider priceFilter={this.handlePriceAdjust}/>
                </div>
            </div>

        )
    }
}

class CouponContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            featuredCoupons: [],
            regularCoupons: []
        };
    }

    updateCompanyFilter = (e) => {
        console.log('in update company');
        fetch(`http://localhost:4000/v1/coupons?company=${e}`)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
            this.setState({regularCoupons: coupons[0].regular});
            this.setState({featured: coupons[0].featured});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    };

    updatePriceFilter = (e) => {
        console.log('in update price');
        fetch(`http://localhost:4000/v1/coupons?price=${e}`)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
            this.setState({regularCoupons: coupons[0].regular});
            this.setState({featured: coupons[0].featured});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    };

    updateDealFilter = (e) => {
        console.log('in update price');
        fetch(`http://localhost:4000/v1/coupons?deal=${e}`)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
            this.setState({regularCoupons: coupons[0].regular});
            this.setState({featured: coupons[0].featured});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    };

    updateProductFilter = (e) => {
        console.log('in update product');
        fetch(`http://localhost:4000/v1/coupons?product=${e}`)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
            this.setState({regularCoupons: coupons[0].regular});
            this.setState({featured: coupons[0].featured});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    };

    componentDidMount() {
        fetch("http://localhost:4000/v1/coupons")
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
            this.setState({featuredCoupons: coupons[0].featured});
            this.setState({regularCoupons: coupons[0].regular})
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    };

    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-2">
                        <CouponFilter priceFilter={this.updatePriceFilter}
                                      companyFilter={this.updateCompanyFilter}
                                      productFilter={this.updateProductFilter}
                                      dealFilter={this.updateDealFilter}
                        />
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7 coupon-wrapper--left">
                                <CouponCard couponView={this.state.regularCoupons}/>
                            </div>

                            <div className="col-md-3 coupon-wrapper--right text-center">
                                <Coupons coupons={this.state.featuredCoupons}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CouponContainer;

