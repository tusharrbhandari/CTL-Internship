import React from 'react';
import './PropertyDetails.css';

const PropertyDetails = ({ details }) => {
  return (
    <div className="details-container">
      <h2>Details</h2>
      <div className="details-grid">
        <div className="detail-item">
          <span className="label">Type:</span>
          <span className="value">{details.type}</span>
        </div>
        <div className="detail-item">
          <span className="label">Bedrooms:</span>
          <span className="value">{details.bedrooms}</span>
        </div>
        <div className="detail-item">
          <span className="label">Super Built up area:</span>
          <span className="value">{details.area} sqft</span>
        </div>
        <div className="detail-item">
          <span className="label">Bathrooms:</span>
          <span className="value">{details.bathrooms}</span>
        </div>
        <div className="detail-item">
          <span className="label">Furnishing:</span>
          <span className="value">{details.furnishing}</span>
        </div>
        <div className="detail-item">
          <span className="label">Floor No:</span>
          <span className="value">{details.floorNo}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;