import React from 'react';

import './wearup.css';  
import OrderSummary from './components/OrderSummary/OrderSummary';
import Header from './components/Header/Header';
import PaymentForm from './components/PaymentForm/PaymentForm';


export const Layout=()=> {
  return (
    <div className="app">
      <div className="row1">
        <Header/>
      </div>
      <div className="row2">
        <div className="sub1">
          <OrderSummary/>
        </div>
        <div className="sub2">
          <PaymentForm/>
        </div>
      </div>
    </div>
  );
}

// export default App;