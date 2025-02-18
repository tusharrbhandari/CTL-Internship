import React, { useState } from 'react';
import { Home, Key, Bed, Coffee, ChevronRight, ChevronDown } from 'lucide-react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    if (expandedService === service) {
      setExpandedService(null);
    } else {
      setExpandedService(service);
    }
  };

  return (
    <section className="services-section">
      <h3>All services</h3>
      
      <div className="service-item" onClick={() => toggleService('facilities')}>
        <div className="service-left">
          <Home className="service-icon" />
          <span>Facilities</span>
        </div>
        {expandedService === 'facilities' ? <ChevronDown /> : <ChevronRight />}
      </div>
      {expandedService === 'facilities' && (
        <div className="service-content">
          <div className="service-detail">
            <h4>Available Facilities</h4>
            <ul>
              <li>Swimming Pool (6AM - 10PM)</li>
              <li>Fitness Center (24/7)</li>
              <li>Spa & Wellness</li>
              <li>Restaurant & Bar</li>
            </ul>
          </div>
        </div>
      )}

      <div className="service-item" onClick={() => toggleService('virtual-key')}>
        <div className="service-left">
          <Key className="service-icon" />
          <span>Virtual Key</span>
        </div>
        {expandedService === 'virtual-key' ? <ChevronDown /> : <ChevronRight />}
      </div>
      {expandedService === 'virtual-key' && (
        <div className="service-content">
          <div className="service-detail">
            <h4>Room Access</h4>
            <p>Your virtual key is active until check-out</p>
            <button className="action-button">Access Room</button>
          </div>
        </div>
      )}

      <div className="service-item" onClick={() => toggleService('my-room')}>
        <div className="service-left">
          <Bed className="service-icon" />
          <span>My Room</span>
        </div>
        {expandedService === 'my-room' ? <ChevronDown /> : <ChevronRight />}
      </div>
      {expandedService === 'my-room' && (
        <div className="service-content">
          <div className="service-detail">
            <h4>Room 304 - Ocean View</h4>
            <ul>
              <li>Temperature: 22°C</li>
              <li>Do Not Disturb: Off</li>
              <li>Next Cleaning: Today at 2 PM</li>
            </ul>
            <div className="room-controls">
              <button className="control-button">Lights</button>
              <button className="control-button">AC</button>
              <button className="control-button">TV</button>
            </div>
          </div>
        </div>
      )}

      <div className="service-item" onClick={() => toggleService('room-service')}>
        <div className="service-left">
          <Coffee className="service-icon" />
          <span>Order Room Service</span>
        </div>
        {expandedService === 'room-service' ? <ChevronDown /> : <ChevronRight />}
      </div>
      {expandedService === 'room-service' && (
        <div className="service-content">
          <div className="service-detail">
            <h4>Room Service Menu</h4>
            <div className="menu-items">
              <div className="menu-item">
                <span>Breakfast</span>
                <span>6:30 AM - 11:00 AM</span>
              </div>
              <div className="menu-item">
                <span>All Day Dining</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="menu-item">
                <span>Night Menu</span>
                <span>11:00 PM - 6:30 AM</span>
              </div>
            </div>
            <button className="action-button">View Full Menu</button>
          </div>
        </div>
      )}

      <div className="points-card">
        <div className="points-number">06</div>
        <p className="points-text">
          Accumulate points with your stay.<br />
          They will turn into special offers for you.
        </p>
      </div>
    </section>
  );
};

export default Services;