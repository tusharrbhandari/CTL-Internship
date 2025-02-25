import React from 'react';
import { Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Let's Explore Hotels</h1>
      <div className="search-icon">
        <Search size={24} />
      </div>
    </header>
  );
};

export default Header;