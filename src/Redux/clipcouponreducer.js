const CLIP_COUPON = 'CLIP_COUPON';

const myTestCoupon = [{deal: '2 for 1', product: 'deal', price: 50.00}];


export default function clipCouponReducer(state = myTestCoupon, action) {
  switch (action.type) {
    case CLIP_COUPON:
      return [
        ...state,
        action.coupon
      ];
    default:
      return state
  }
}

