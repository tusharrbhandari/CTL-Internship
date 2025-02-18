import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
  const items = [
    {
      id: 1,
      name: "New Balance 5740 Men's Sneakers - Mindful Grey",
      price: 129.00,
      originalPrice: 189.00,
      size: "42 EU - 8.5 US",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "New Balance 997H Men's Sneakers - Grey",
      price: 119.00,
      originalPrice: 159.00,
      size: "42.5 EU - 9 US",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "New Balance 5740 Women's - Oyster Pink",
      price: 149.00,
      originalPrice: 199.00,
      size: "41.5 EU - 8 US",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="order-summary">
      <h2>Summary Order</h2>
      <p className="subtitle">Check your item and select your shipping for better experience order item.</p>
      
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="size">{item.size}</p>
              <div className="price-container">
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="original-price">${item.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shipping-methods">
        <h3>Available Shipping Method</h3>
        <div className="shipping-options">
          <label className="shipping-option">
            <input type="radio" name="shipping" defaultChecked />
            <div className="option-content">
              <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" alt="FedEx" />
              <div className="option-details">
                <span>FedEx Delivery</span>
                <small>Delivery: 2-3 days work</small>
              </div>
              <span className="shipping-price">Free</span>
            </div>
          </label>
          
          <label className="shipping-option">
            <input type="radio" name="shipping" />
            <div className="option-content">
              <img src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" alt="DHL" />
              <div className="option-details">
                <span>DHL Delivery</span>
                <small>Delivery: 1-3 days work</small>
              </div>
              <span className="shipping-price">$12.00</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;