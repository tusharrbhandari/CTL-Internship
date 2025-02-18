import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Lock, Home, Calendar, Search } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/profile" className="nav-item">
        <User className="nav-icon" size={20} />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/security" className="nav-item">
        <Lock className="nav-icon" size={20} />
        <span>Security</span>
      </NavLink>
      <NavLink to="/" className="nav-item">
        <Home className="nav-icon" size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/calendar" className="nav-item">
        <Calendar className="nav-icon" size={20} />
        <span>Calendar</span>
      </NavLink>
      <NavLink to="/search" className="nav-item">
        <Search className="nav-icon" size={20} />
        <span>Search</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;