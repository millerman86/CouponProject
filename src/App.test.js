import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main Pages/HomePage/CouponContainer/CouponContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
