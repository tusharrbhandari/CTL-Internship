import React from 'react';
import { Home, Heart, Menu, MessageCircle, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <button className="nav-button active">
        <Home size={24} />
      </button>
      <button className="nav-button">
        <Heart size={24} />
      </button>
      <button className="nav-button">
        <Menu size={24} />
      </button>
      <button className="nav-button">
        <MessageCircle size={24} />
      </button>
      <button className="nav-button">
        <User size={24} />
      </button>
    </nav>
  );
};

export default BottomNav;