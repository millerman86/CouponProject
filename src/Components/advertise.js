/**
 * Created by amrenmiller on 4/6/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import '../App.js'


let cents = [
    '.00',
    '.01',
    '.02',
    '.03',
    '.04',
    '.05',
    '.06',
    '.07',
    '.08',
    '.09',
    '.10',
    '.11',
    '.12',
    '.13',
    '.14',
    '.15',
    '.16',
    '.17',
    '.18',
    '.19',
    '.20',
    '.21',
    '.22',
    '.23',
    '.24',
    '.25',
    '.26',
    '.27',
    '.28',
    '.29',
    '.30',
    '.31',
    '.32',
    '.33',
    '.34',
    '.35',
    '.36',
    '.37',
    '.38',
    '.39',
    '.40',
    '.41',
    '.42',
    '.43',
    '.44',
    '.45',
    '.46',
    '.47',
    '.48',
    '.49',
    '.50',
    '.51',
    '.52',
    '.53',
    '.54',
    '.55',
    '.56',
    '.57',
    '.58',
    '.59',
    '.60',
    '.61',
    '.62',
    '.63',
    '.64',
    '.65',
    '.66',
    '.67',
    '.68',
    '.69',
    '.70',
    '.71',
    '.72',
    '.73',
    '.74',
    '.75',
    '.76',
    '.77',
    '.78',
    '.79',
    '.80',
    '.81',
    '.82',
    '.83',
    '.84',
    '.85',
    '.86',
    '.87',
    '.88',
    '.89',
    '.90',
    '.91',
    '.92',
    '.93',
    '.94',
    '.95',
    '.96',
    '.97',
    '.98',
    '.99',
];


const myAuth = {
    isAuthenticated: function () {
        const result = sessionStorage.getItem('token');
        return !!result && (sessionStorage.getItem('usertype') === 'company');
    }
};


const dataLoadFunction = {
    username: function () {
        return sessionStorage.getItem('username');
    },

    usertype: function () {
        return sessionStorage.getItem('usertype');
    }
};


const AdvertiseSwitch = () => {
    if (myAuth.isAuthenticated()) {
        return (
            <div>
                <AdvertiseProducts/>
            </div> )
    } else if (!myAuth.isAuthenticated()) {
        return (
            <div>
                <Advertise/>
            </div>
        )
    }
};

class Advertise extends React.Component {

    handleLogin = (evt) => {
        let myInit = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.refs.identifier.value,
                password: this.refs.password.value,
            })
        };

        // sessionStorage.setItem('sessionUsername', sessionUsername);

        evt.preventDefault();
        fetch(`http://localhost:4000/v1/createuser`, myInit)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    };

    render() {
        return (
            <div>
                <form className='ui form' onSubmit={this.handleLogin}>
                    <div className='field'>
                        <div className='col-xs-12'>
                            <div className='col-xs-2'>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <p className='warning'>To advertise, you need a company account.</p>
                            </div>
                            <div className='col-xs-2'>
                                <h3>Not a Member? Create an account!</h3>
                                <label >Company/Avatar/Name</label>
                                <input type="text" ref="identifier" name='username' placeholder="Identifier"/>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className='col-xs-12'>
                            <div className='col-xs-2'>
                            </div>
                            <div className='col-xs-2'>
                                <label >Password</label>
                                <input type="text" ref="password" name='password' placeholder="Password"/>
                                <br />
                                <br />
                                <button className="ui button" type="submit">Submit</button>
                                <Link to='/login'><p>Already a member? LOGIN!</p></Link>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        )
    }
}


class AdvertiseProducts extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            fields: {
                name: '',
                email: ''
            },

            // username: sessionStorage.getItem('');

            fieldErrors: {},
            people: [],
            id: 'ID',
            description: '(Description: Max=60) Please include spaces!',
            product: '(Product)',
            deal: '(Deal)',
            offer: '',
            condition: '',
            disclaimer: '',
            company: '(Company Name)',
            companycache: '',
            price: '(Price)',
            shipping: '(Shipping)'
        };
    }


    handleIdChange = (evt) => {
        if (evt.target.value.toString().length > 8) {
            alert("No longer than 8 characters!");
        }
        this.setState({id: evt.target.value});
    };

    handleShippingChange = (evt) => {
        if (evt.target.value.toString().length > 15) {
            alert('No longer than 15 characters!');
        }
        this.setState({shipping: evt.target.value});

    };

    // isNumeric = (n) => {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // };
    //
    // validatedPrice = (price) => {
    //
    //
    //     if (this.validatedPrice(price))
    //         if (!String(price).match(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)) {
    //             alert("Enter price only. For example: 523.36 or $523.36");
    //
    //         } else {
    //             return true
    //         }
    // };


    handlePriceChange = (evt) => {
        if (evt.target.value.toString().length > 6) {
            alert('No longer than 5 characters!');
        }
        for (let verifier of cents) {
            if (evt.target.value.includes(verifier)) {
                if (!String(evt.target.value).match(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)) {
                    alert("Enter price only. For example: 523.36 or $523.36");
                }
                else if (!evt.target.value.includes('$')) {
                    this.setState({price: "$" + evt.target.value})
                }
            } else {
                this.setState({price: evt.target.value})
            }
        }
            // this.setState({price: evt.target.value});
    };


    // && evt.target.value.includes('.')
    // else if ()) {
    // alert('Only numbers allowed');

    handleDealChange = (evt) => {
        let deal = this.refs.deal.value;
        if (deal.length > 7) {
            alert('No longer than 7 characters!')
        }
        this.setState({deal: deal});
    };


    handleCouponSubmit = (evt) => {

        let myInit = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.refs.id.value,
                product: this.refs.product.value,
                deal: this.refs.deal.value,
                offer: this.refs.offer.value,
                condition: this.refs.condition.value,
                disclaimer: this.refs.disclaimer.value,
                company: this.refs.company.value,
                shipping: this.refs.shipping.value,
                price: this.refs.price.value
            })
        };

        evt.preventDefault();

        fetch(`http://localhost:4000/v1/coupons`, myInit)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });

        this.setState({companycache: `${this.refs.company.value} will now be saved for future submissions unless changed`});


    };


    // let price = this.refs.price.value;
    // if (price.includes('.00') !== true) {
    //     price = price.split('');
    //     price.push('.00');
    //     price = price.join('');
    //     console.log(price);
    // }


    render() {
        return (
            <div >

                <div className="CouponViewContainer">

                    <div
                        className="CouponCard center-align"

                    >
                        <div className="coupon-card--image-wrap">
                            <img />
                            <div className="coupon-card--company col-xs-3">
                                {this.state.company}
                            </div>
                        </div>
                        <div className="coupon-card--meta row">

                            <div className="coupon-card--price col-xs-12">
                                {this.state.deal}
                                <div className='float-right'>
                                    {this.state.price}
                                </div>
                                <div className='description'>
                                    {this.state.description}
                                </div>
                            </div>
                        </div>
                        <div className="coupon-card--free-shipping row">
                            <br />
                            <div className="col-xs-12">
                                <div className="button"><span className="tiny-text">{this.state.shipping}</span></div>
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
                                    <span className='col-xs-7 float-right coupon-code'>{this.state.id}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xs-4'>
                </div>
                <div className='col-xs-4 center'>
                    <h3>Advertise your products here</h3>

                    <form onSubmit={this.handleCouponSubmit}>
                        <input type='text' placeholder='ID max=8'
                               ref='id'
                               onChange={this.handleIdChange}
                        />
                        Put in your own id or have one generated for you!
                        <br />
                        <input type='text' placeholder='Product/Description'
                               maxLength='60'
                               ref='product'
                               onChange={e => this.setState({product: e.target.value})}
                        />

                        <br />
                        <input type='text' placeholder='Deal'
                               ref='deal'
                               onChange={this.handleDealChange}
                        />
                        <br />
                        <input type='text' placeholder='Offer'
                               ref='offer'
                        />
                        <br /> <input type='text' placeholder='Price'
                                      ref='price'
                                      onChange={this.handlePriceChange}
                    />
                        <br />
                        <input type='text' placeholder='Condition'
                               ref='condition'
                        />
                        <br />
                        <input type='text' placeholder='Disclaimer'
                               ref='disclaimer'
                        />
                        <br />
                        <input type='text' placeholder='Company'
                               onChange={e => this.setState({company: e.target.value})}
                               ref='company'
                        />
                        {this.state.companycache}
                        <br />
                        <input type='text' placeholder='Shipping'
                               onChange={this.handleShippingChange}
                               ref='shipping'
                        />
                        <br />
                        <button type='submit' className='ui button '>Submit</button>
                    </form>

                </div>
            </div>
        );


    }


}


export default AdvertiseSwitch;
