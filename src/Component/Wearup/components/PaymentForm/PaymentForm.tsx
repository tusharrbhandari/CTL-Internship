import React from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
  return (
    <div className="payment-form">
      <h2>Payment Details</h2>
      <p className="subtitle">Complete your purchase item by providing your payment details order.</p>

      <form>
        <div className="form-group">
          <label>Email Address</label>
          <div className="input-container">
            <input 
              type="email" 
              defaultValue="barlyvallendit@gmail.com" 
              className="verified"
            />
            <span className="check-icon">✓</span>
          </div>
        </div>

        <div className="form-group">
          <label>Card Detail</label>
          <div className="card-inputs">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="MM / YY" />
            <input type="text" placeholder="CVC" />
          </div>
        </div>

        <div className="form-group">
          <label>Card Holder</label>
          <input type="text" defaultValue="Barly Vallendi" />
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <div className="input-container">
            <input 
              type="text" 
              defaultValue="7851 Garfield Ave, Huntington Beach" 
              className="verified"
            />
            <span className="check-icon">✓</span>
          </div>
          <input type="text" defaultValue="California(CA)" />
          <input type="text" defaultValue="92648" />
        </div>

        <div className="summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$ 397.00</span>
          </div>
          <div className="summary-row">
            <span>Vat (20%)</span>
            <span>$ 2.89</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$ 399.89</span>
          </div>
        </div>

        <button type="submit" className="pay-button">
          Pay $ 399.89
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;