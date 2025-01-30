  import React, { useState } from 'react';
// import { Heart } from "lucide-react";
  import './CarCard.css';
import HeartList from '../c/co';

  const CarCard = ({
    imageUrl,
    title,
    distance,
    fuelType,
    transmission,
    price,
    oldPrice,
    discount,
    location,
  }) => {
      
    
    return (
      <div className='layout'>
      <div className='container'>
        <h1>Recommended Used Cars</h1>
        <p>Showing 30 more cars you might like</p>
        <div className='card'>
      <div className="car-card">
        <img src={imageUrl} alt={title} className="car-card-image" />
        <div className="car-card-content">
          <h3 className="car-card-title">
            {title}
            <HeartList/>  </h3>
          
          <p className="car-card-details">
            {distance} kms · {fuelType} · {transmission}
          </p>
          <div className="car-card-pricing">
            <span className="car-card-price">{price}</span>
            <input type="checkbox"  />Compare
            {oldPrice && discount && (
              <span className="car-card-discount">
                <span className="car-card-old-price">{oldPrice}</span>
                <span className="car-card-save"> (Save {discount})</span>
              </span>
            )}
          </div>
          <button className="car-card-button">View Seller Details</button>
          <p className="car-card-location">
            <span className="car-card-map-icon">📍</span> {location}
          </p>
        </div>
        </div>
        <div className="car-card">
        <img src={imageUrl} alt={title} className="car-card-image" />
        <div className="car-card-content">
          <h3 className="car-card-title">
            {title}
           <HeartList/> </h3>
          <p className="car-card-details">
            {distance} kms · {fuelType} · {transmission}
          </p>
          <div className="car-card-pricing">
            <span className="car-card-price">{price}</span>
            {oldPrice && discount && (
              <span className="car-card-discount">
                <span className="car-card-old-price">{oldPrice}</span>
                <span className="car-card-save"> (Save {discount})</span>
              </span>
            )}
          </div>
          <button className="car-card-button">View Seller Details</button>
          <p className="car-card-location">
            <span className="car-card-map-icon">📍</span> {location}
          </p>
        </div>
        {/* </div>

        <div className="car-card">
        <img src={imageUrl} alt={title} className="car-card-image" />
        <div className="car-card-content">
          <h3 className="car-card-title">
            {title}
            <HeartList/></h3>
          <p className="car-card-details">
            {distance} kms · {fuelType} · {transmission}
          </p>
          <div className="car-card-pricing">
            <span className="car-card-price">{price}</span>
            {oldPrice && discount && (
              <span className="car-card-discount">
                <span className="car-card-old-price">{oldPrice}</span>
                <span className="car-card-save"> (Save {discount})</span>
              </span>
            )}
          </div>
          <button className="car-card-button">View Seller Details</button>
          <p className="car-card-location">
            <span className="car-card-map-icon">📍</span> {location}
          </p>
        </div> */}
        </div>     
        
      </div>
        <div className="options"><h5>More Maruti Cars</h5></div>
        <hr/>
        <div className="options"><h5>More Hatchback Cars</h5></div>
      </div></div>
    );
  };

  export default CarCard;
