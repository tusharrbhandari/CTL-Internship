import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import '../styles/Recommendations.css';

const Recommendations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const recommendations = [
    {
      id: 1,
      title: 'Enjoy some me time',
      description: 'Relax with our massages and treatments.',
      price: 'From €30/session',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500',
      details: {
        duration: '60-90 minutes',
        availability: 'Spa facilities will close in 4 hours',
        treatments: [
          'Swedish Massage',
          'Deep Tissue Massage',
          'Hot Stone Therapy',
          'Aromatherapy'
        ]
      }
    },
    {
      id: 2,
      title: 'Bike Riding',
      description: 'Varied tour options available.',
      price: 'From €25/person',
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500',
      details: {
        duration: '2-4 hours',
        availability: 'Next tour starts in 1 hour',
        options: [
          'City Tour',
          'Mountain Trail',
          'Coastal Route',
          'Sunset Ride'
        ]
      }
    },
    {
      id: 3,
      title: 'Dinner at the Table',
      description: 'Fine dining experience.',
      price: 'From €50/person',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500',
      details: {
        duration: '2 hours',
        availability: 'Reservations available from 6 PM',
        menu: [
          'Chef\'s Special',
          'Wine Pairing',
          'Tasting Menu',
          'À la carte'
        ]
      }
    }
  ];

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const nextRecommendation = () => {
    setActiveIndex((prev) => (prev + 1) % recommendations.length);
    setExpandedCard(null);
  };

  return (
    <section className="recommendations">
      <h3>Recommended for you</h3>
      <div className="recommendation-card" onClick={() => toggleCard(activeIndex)}>
        <img 
          src={recommendations[activeIndex].image}
          alt={recommendations[activeIndex].title} 
          className="recommendation-image" 
        />
        <div className="recommendation-content">
          <h4>{recommendations[activeIndex].title}</h4>
          <p>{recommendations[activeIndex].description}</p>
          <p className="price">{recommendations[activeIndex].price}</p>
        </div>
        <ChevronRight className="arrow-icon" onClick={nextRecommendation} />
      </div>

      {expandedCard === activeIndex && (
        <div className="recommendation-details">
          <div className="details-content">
            <div className="details-header">
              <h5>Details</h5>
              <span className="duration">
                {recommendations[activeIndex].details.duration}
              </span>
            </div>
            <p className="availability">
              {recommendations[activeIndex].details.availability}
            </p>
            <div className="options-list">
              {Object.values(recommendations[activeIndex].details)[2].map((item, index) => (
                <div key={index} className="option-item">
                  {item}
                </div>
              ))}
            </div>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      )}

      <div className="carousel-dots">
        {recommendations.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              setExpandedCard(null);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;