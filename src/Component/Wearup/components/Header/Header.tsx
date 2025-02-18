import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Wearup.</div>
      <nav className="checkout-steps">
        <div className="step">Order Overview</div>
        <div className="step active">
          <span className="check-icon">✓</span>
          Information
        </div>
        <div className="step">Payment Details</div>
        <div className="step">Complete Order</div>
      </nav>
    </header>
  );
};

export default Header;