import React from 'react';

export const OrderBook = ({ onPlaceOrder }) => (
  <div className="books-wrapper">
    <pre>book image</pre>
    <input type="text" placeholder="your email"/>
    <button onClick={onPlaceOrder}>order</button>
  </div>
);
