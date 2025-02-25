import React, { useState } from 'react';
import './PropertyGallery.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="featured-tag">FEATURED</div>
      <div className="main-image-container">
        <button className="nav-button prev" onClick={prevImage}>
          <ChevronLeft />
        </button>
        <img src={images[currentImage]} alt={`Property view ${currentImage + 1}`} className="main-image" />
        <button className="nav-button next" onClick={nextImage}>
          <ChevronRight />
        </button>
      </div>
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImage === index ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;