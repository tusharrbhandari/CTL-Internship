import React from 'react';
import Header from './components/Header';
import Recommendations from './components/Recommendations';
import Services from './components/Services';
import './hotel.css';


export const Hotel=()=> {
  return (
    <div className="app-container">
      <Header />
      <Recommendations />
      <Services />
    </div>
  );
}

// export default App;