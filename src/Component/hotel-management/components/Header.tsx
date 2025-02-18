import React from 'react';
import { Bell } from 'lucide-react';
import '../styles/App.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="user-info">
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
          alt="User avatar" 
          className="user-avatar"
        />
        <div className="user-details">
          <h2>Joana Barros</h2>
          <p>Hotel Guest</p>
        </div>
      </div>
      <button className="notification-icon">
        <Bell size={24} />
      </button>
    </header>
  );
};

export default Header;