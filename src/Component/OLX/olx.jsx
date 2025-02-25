import React from 'react';
import './olx.css';
import PropertyGallery from './components/PropertyGallery';
import PropertyDetails from './components/PropertyDetails';
import SellerInfo from './components/SellerInfo';

export const Olxhome=()=> {
  const propertyImages = [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1560449015-d090b3ff6cac?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800"
  ];

  const propertyDetails = {
    type: "Flats / Apartments",
    bedrooms: 2,
    area: 900,
    bathrooms: 2,
    furnishing: "Semi Furnished",
    floorNo: 1
  };

  const seller = {
    name: "Vaishali",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
  };

  return (
    <div className="app-container">
      <div className="property-listing">
        <div className="property-header">
          <div className="price-section">
            <h1>₹ 14,500</h1>
            <p>2 Beds - 2 Ba - 900 ft2</p>
            <p className="location">Makhmalabad, nashik 422004</p>
          </div>
          <div className="action-buttons">
            <button className="share-button">Share</button>
            <button className="favorite-button">♡</button>
          </div>
        </div>

        <PropertyGallery images={propertyImages} />
        <PropertyDetails details={propertyDetails} />
        <SellerInfo seller={seller} />

        <div className="property-description">
          <h2>Description</h2>
          <p>2bhk flat for rent in ahwamedh nagar, makhmalabad with 2 bathroom and 4 gallery and parking. Deposit: 40000, rent: 14500 negotiable, maintenance 500, prefer to government employees.</p>
        </div>
      </div>
    </div>
  );
}

// export default App;