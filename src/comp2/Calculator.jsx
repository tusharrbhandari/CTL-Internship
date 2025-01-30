import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, IndianRupee } from 'lucide-react';
import './Calculator.css';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(469000);
  const [duration, setDuration] = useState(4);
  const [emi, setEmi] = useState(0);
  const interestRate = 14.5;

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfMonths = duration * 12;
    
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths) / 
                (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
    
    return Math.round(emi);
  };

  useEffect(() => {
    setEmi(calculateEMI());
  }, [loanAmount, duration]);

  const formatCurrency = (amount) => {
    const lakhs = Math.floor(amount / 100000);
    const thousands = ((amount % 100000) / 1000).toFixed(0);
    if (lakhs > 0) {
      return `₹${lakhs}.${thousands} Lakh`;
    }
    return `₹${thousands},000`;
  };

  return (
    <div className="calculator-container">
      <div className="calculator-content">
        <h1 className="calculator-title">EMI Calculator</h1>
        <p className="calculator-subtitle">
          Avail upto 100% of the car value in finance at attractive interest rates
        </p>

        <div className="input-section">
          <div className="loan-amount">
            <label>Loan Amount</label>
            <div className="range-container">
              <input
                type="range"
                min="0"
                max="521000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="range-slider"
              />
              <div className="range-labels">
                <span>₹0</span>
                <span>{formatCurrency(loanAmount)}</span>
                <span>₹5,21,000</span>
              </div>
            </div>
          </div>

          <div className="duration-section">
            <label>Duration <span>in years</span></label>
            <div className="duration-buttons">
              {[1, 2, 3, 4, 5].map((year) => (
                <button
                  key={year}
                  className={`duration-button ${duration === year ? 'active' : ''}`}
                  onClick={() => setDuration(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="interest-rate">
            <p>Rate of interest @ {interestRate}%* for {duration} Years</p>
          </div>

          <div className="emi-display">
            <div>
              <label>Your Monthly EMI</label>
              <h2>₹{emi.toLocaleString('en-IN')}</h2>
            </div>
            <button className="view-breakup">View Breakup</button>
          </div>

          <button className="interest-button">
            Interested in Loan
          </button>

          <p className="customers-note">
            550+ customers availed the facility
          </p>
        </div>
      </div>

      {/* <div className="calculator-illustration">
        <CalculatorIcon className="calc-icon" size={120} />
        <IndianRupee className="rupee-icon" size={32} />
      </div> */}
    </div>
  );
};

export default Calculator;