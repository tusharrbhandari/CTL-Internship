import React from 'react';
import { Star, Heart, MapPin } from 'lucide-react';
import './HotelCard.css';

interface HotelCardProps {
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  size?: 'large' | 'small';
}

const HotelCard = ({ name, location, price, rating, image, size = 'large' }: HotelCardProps) => {
  return (
    <div className={`hotel-card ${size}`}>
      <div className="hotel-image">
        <img src={image} alt={name} />
        <button className="favorite-btn">
          <Heart size={20} />
        </button>
      </div>
      <div className="hotel-info">
        <h3>{name}</h3>
        <div className="location">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="price-rating">
          <span className="price">${price}/night</span>
          <div className="rating">
            <Star size={16} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;