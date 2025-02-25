import React from 'react';
import { Hotel, Plane, MapPin, UtensilsCrossed } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-item active">
        <Hotel />
        <span>Hotel</span>
      </div>
      <div className="nav-item">
        <Plane />
        <span>Flight</span>
      </div>
      <div className="nav-item">
        <MapPin />
        <span>Place</span>
      </div>
      <div className="nav-item">
        <UtensilsCrossed />
        <span>Food</span>
      </div>
    </nav>
  );
};

export default Navigation;