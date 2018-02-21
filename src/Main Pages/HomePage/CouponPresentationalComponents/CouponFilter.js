import React from 'react';

import  MySlider from '../../Slider/Slider';



const alphabet = [
  '',
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
];



export default class CouponFilter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
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

  handleForwardClick = (e) => {
    this.props.forwardPress(e);
  };

  handleBackwardClick = (e) => {
    this.props.backwardPress(e);
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
            { alphabet.map((letter, i) =>
              <option key={i}>{letter}</option>
            ) }
          </select>

          <p>By Product</p>

          <select onChange={(e) => this.handleProductLetterClick(e.target.value)}>
            { alphabet.map((letter, i) =>
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

          <MySlider className='my-slider' priceFilter={this.handlePriceAdjust}/>

          <div className='remove-margin'>
            Back
            Forward
          </div>

          <div className='cursor-pointer' onClick={(e) => this.handleBackwardClick(this.props.pageBase)}>

            <i className='arrow circle outline left icon forward-back' />

          </div>

          <div className='cursor-pointer' onClick={(e) => this.handleForwardClick(this.props.resultsPerPage)}>

            <i className='arrow circle outline right icon forward-back' />

          </div>
        </div>
      </div>

    );
  }
}


