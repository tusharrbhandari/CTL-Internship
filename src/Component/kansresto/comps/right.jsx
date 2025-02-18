import React, { useState } from "react";
import { Minus, Plus, Trash2 } from 'lucide-react';

export const RightContent=()=>{
    const [cuscount,setcuscounnt]=useState(0);
       
    const [orderItems, setOrderItems] = useState([
        {
          id: 1,
          name: 'Japanese Chicken Gyoza',
          price: 81700,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=200'
        },
        {
          id: 2,
          name: '2pcs of Amazing Avocado',
          price: 48000,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=200'
        },
        {
          id: 3,
          name: 'Healthy Kids Meal With 50%',
          price: 83000,
          quantity: 4,
          image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=200'
        },
        {
          id: 4,
          name: 'Krosang Thats It with 10%',
          price: 75000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
        }
      ]);
      const [paymentDetails, setPaymentDetails] = useState([
        { label: "Subtotal", value: 1298000 },
        { label: "Discount sales", value: -120000 },
        { label: "Total tax", value: 40000 },
      ]);
      
    
      // Calculate total dynamically
      const total = paymentDetails.reduce((acc, item) => acc + item.value, 0);    
    
      const updateQuantity = (id, increment) => {
        setOrderItems(items =>
          items.map(item => {
            if (item.id === id) {
              const newQuantity = increment ? item.quantity + 1 : Math.max(0, item.quantity - 1);
              return { ...item, quantity: newQuantity };
            }
            return item;
          })
        );
      };
    
      const removeItem = (id) => {
        setOrderItems(items => items.filter(item => item.id !== id));
      };
    
      const formatPrice = (price) => {
        return `Rp${price.toLocaleString()}`;
      };
    return(
        <>
        <aside className="right">
            <div className="sub1">
                <h3>Customer Information <span>i</span></h3>
                <div className="customerinf1">
                <p>Customer name</p>
                <b>Emir Abiyyu</b> 

                </div>
                <div className="customerinf2">
                <div className="detail"><p>Customer name</p>
                <b>Emir Abiyyu</b></div>
                <div className="detailinf">
                  <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() =>setcuscounnt(cuscount-1)}
              >
                <Minus size={16} />
              </button>
              <span>{cuscount}</span>
              <button 
                className="quantity-btn"
                onClick={() => setcuscounnt(cuscount+1)}
              >
                <Plus size={16} />
              </button>
            </div>
                </div>
                </div>
                
            </div>
            {/* <div className="sub2"> */}
            <div className="order-container">
      <div className="order-header">
        <h1>Current Order</h1>
      </div>
      
      <div className="cards-container">
        {orderItems.map(item => (
          <div key={item.id} className="order-card">
            <img 
              src={item.image} 
              alt={item.name} 
              className="food-image"
            />
            
            <div className="fd">
            <div className="food-details">
              <h3 className="food-name">{item.name}</h3>
              <p className="food-price">{formatPrice(item.price)}</p>
            </div>
            
            <div className="qd">
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, false)}
              >
                <Minus size={16} />
              </button>
              <span>{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, true)}
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button 
              className="delete-btn"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 size={20} />
            </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
            {/* </div> */}
            <div className="sub3">
      <h2 className="payment-title">Payment Summary</h2>
      <div className="payment-details">
        {paymentDetails.map((item, index) => (
          <div key={index} className="payment-row">
            <span>{item.label}</span>
            <span className={item.value < 0 ? "negative" : ""}>
              Rp {item.value.toLocaleString("id-ID")},00
            </span>
          </div>
        ))}
      </div>
      <div className="payment-total">
        <span>Total</span>
        <span className="total-amount">Rp {total.toLocaleString("id-ID")},00</span>
      </div>
      <button className="order-button">Order Now</button>
    </div>
        </aside>
        </>
    )
}