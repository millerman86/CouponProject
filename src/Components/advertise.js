/**
 * Created by amrenmiller on 4/6/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import '../App.js'
import dropzone from 'dropzone';

let randomFixedInteger = function (length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
};

let cents = [
    '.00',
    '.01',
    '.02',
    '.03',
    '.04',
    '.05',
    '.06',
    '.07',
    '.09',
    '.08',
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
        return true;
        // !!result && (sessionStorage.getItem('usertype') === 'company');
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





    createCompanyAccount = (evt) => {
        evt.preventDefault();

        if (this.refs.password.value !== this.refs.passwordverify.value) {
            alert("Passwords don't match");
        } else if (this.refs.password.value === this.refs.passwordverify.value) {

            let myInit = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usertype: 'company',
                    username: this.refs.identifier.value,
                    password: this.refs.password.value,
                })
            };


            fetch(`http://localhost:4000/v1/createuser`, myInit)
                .then(function (response) {
                    return response.json()
                }).then((response) => {
                console.log('parsed coupons', response);
                sessionStorage.setItem('usertype', response.type);
                sessionStorage.setItem('token', response.token);
                sessionStorage.setItem('username', response.username)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });
        }

    };


    render() {
        return (
            <div>
                <form className='ui form' onSubmit={this.createCompanyAccount}>
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
                                <input type="password" ref="password" name='password' placeholder="Password"/>
                                <input type='password' ref="passwordverify" name='passwordverify' placeholder="Verify Password"/>

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

const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

class AdvertiseProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                name: '',
                email: ''
            },
            fieldErrors: {},
            people: [],
            id: 'ID',
            product: '(Description: Max=60) Please include spaces!',
            deal: '(Deal)',
            offer: '',
            condition: '',
            disclaimer: '',
            company: '(Company Name)',
            companycache: '',
            price: '(Price)',
            shipping: '(Shipping)',
            component: 'Regular',
            priceError: '',
            image: undefined,
        };
    }

    handleIdChange = (evt) => {
        if (evt.target.value.toString().length > 8) {
            alert("No longer than 8 characters!");
        } else if (!isNumeric(evt.target.value)) {
            this.setState({id: ''});
        }
        this.setState({id: evt.target.value})
    };

    handleShippingChange = (evt) => {
        if (evt.target.value.length > 25) {
            alert('No longer than 25 characters!');
        }
        this.setState({shipping: evt.target.value});

    };

    handlePriceChange = (evt) => {

        if (evt.target.value.toString().length > 6) {
            alert('No longer than 6 characters!');
        } else if (evt.target.value.length > 0) {
            if (!isNumeric(evt.target.value)) {
                alert('Only numbers allowed and values above $1 are allowed');
            } else if (evt.target.value.length >= 1) {
                for (let verifier of cents) {
                    if (evt.target.value.includes(verifier)) {
                        if (!String(evt.target.value).match(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)) {
                            alert("Enter price only. For example: 523.36 or $523.36. Price must be above $1");
                        }
                        else if (!evt.target.value.includes('$')
                            && String(evt.target.value).match(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)) {
                            this.setState({price: "$" + evt.target.value})
                        } else if (!isNumeric(evt.target.value)) {
                            alert('Only numbers allowed!');
                            return
                        }
                    } else {
                        this.setState({price: '$' + evt.target.value});
                    }
                }
            }
        }
    };

    // handleDealChange = (evt) => {
    //     let deal = this.refs.deal.value;
    //     if (deal.length > 7) {
    //         alert('No longer than 7 characters!')
    //     }
    //     this.setState({deal: deal});
    // };

    onDealSelect = (evt) => {
        this.setState({deal: '%' + evt.target.value + ' ' + 'OFF'});
    };

    onDealTypeSelect = (evt) => {
        if (evt.target.value === 'Select Deal') {
            return
        } else {
            this.setState({ deal: evt.target.value });
        }
    };

    // onImageSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({image: e.target.element})
    // };

    handleCouponSubmit = (evt) => {

        evt.preventDefault();

        let id = this.refs.id.value;
        let product = this.refs.product.value;
        let company = this.refs.company.value;
        let shipping = this.state.shipping;
        let price;

        // let deal = this.state.deal;
        // let offer = this.refs.offer.value;
        // let condition = this.refs.condition.value;
        // let disclaimer = this.refs.disclaimer.value;

        if (!(
            product
            // && deal
            // && offer
            // && condition
            // && disclaimer
            && company)) {
            return
        }

        if (this.state.price === '(Price)') {
            this.setState({ priceError: "You must enter a price to submit a coupon."});
            return
        } else {
            price = this.state.price;
        }

        if (id === '') {
            id = randomFixedInteger(8);
        }

        price = price.split('');
        delete price[(price.indexOf('$'))];
        price = price.join('');
        price = parseFloat(price).toFixed(2);

        let myInit = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                product,
                // deal,
                // offer,
                // condition,
                // disclaimer,
                company,
                shipping,
                price,
            })
        };

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

    render() {
        return (
            <div>
                <div className="CouponViewContainer">
                    <div
                        className="CouponCard center-align"
                    >
                        <div className="coupon-card--image-wrap">
                            <img alt='' src={this.state.image}/>
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
                                    {this.state.product}
                                </div>
                            </div>
                        </div>
                        <div className="coupon-card--free-shipping row">
                            <br />
                            <div className="col-xs-12">
                                <div className="button"><span className="tiny-text">{this.state.shipping}</span></div>
                            </div>
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
                                <div className="clip-button text-left"> <button><i className='cut icon'></i>Clip</button>
                                    <span className='float-right coupon-code'>{this.state.id}</span></div>
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
                               defaultValue=''
                               onChange={this.handleIdChange}
                        />
                        Put in your own id or have one generated for you!
                        <br />
                        <input type='text' placeholder='Product/Description'
                               maxLength='70'
                               ref='product'
                               onChange={e => this.setState({product: e.target.value})}
                        />
                        <br />
                        <select ref='other'
                            onChange={this.onDealTypeSelect}>
                            <option default>Select Deal</option>
                            <option>2 for 1</option>
                            <option>FREE *</option>
                            <option>1/2 OFF</option>
                        </select>
                        Or % OFF
                        <select ref='%'
                            onChange={this.onDealSelect}>
                            <option></option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                            <option>55</option>
                            <option>60</option>
                            <option>65</option>
                            <option>70</option>
                            <option>75</option>
                            <option>80</option>
                            <option>85</option>
                            <option>90</option>
                            <option>95</option>
                        </select>

                        <br /> <input type='text' placeholder='Price'
                                      ref='price'
                                      onChange={this.handlePriceChange}
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
                        <br/>
                        <button type='submit' className='ui button '>Submit</button>


                    </form>


                    {/*<form action="" method="post" enctype="multipart/form-data">*/}
                        {/*<input type="file" name="file" />*/}
                    {/*</form>*/}







                </div>
            </div>
        );
    }
}


export default AdvertiseSwitch;



/*
 <form action="http://localhost:4000/v1/imagesubmit"
 className="dropzone"
 id="my-awesome-dropzone"></form>

 */





/*
 <div className='row'>
 <div className='col-md-12 drop-zone'>
 <form action="url('image/do-upload')"
 className='dropzone'
 id='addImages'>
 <h2>Drop your images here!</h2>


 </form>
 </div>
 </div>
 */

/*
<input type='text' placeholder='Offer'
       ref='offer'
/>

<input type='text' placeholder='Disclaimer'
       ref='disclaimer'
/>
<br />
<input type='text' placeholder='Condition'
ref='condition'
    />
    */


// let price = this.refs.price.value;
// if (price.includes('.00') !== true) {
//     price = price.split('');
//     price.push('.00');
//     price = price.join('');
//     console.log(price);
// }

// isNumeric = (n) => {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };
//
// validatedPrice = (price) => {
//
//     if (this.validatedPrice(price))
//         if (!String(price).match(/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/)) {
//             alert("Enter price only. For example: 523.36 or $523.36");
//
//         } else {
//             return true
//         }
// };


// import UUID from 'simply-uuid';
//
// const createId = () => {
//     return UUID.generate();
// };
