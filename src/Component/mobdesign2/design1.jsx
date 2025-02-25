import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import HotelCard from './components/HotelCard/HotelCard';
import BottomNav from './components/BottomNav/BottomNav';
import './design1.css';

export const Design1=()=> {
  return (
    <div className="app">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <section className="popular-hotels">
          <div className="section-header">
            <h2>Popular Hotels</h2>
            <button className="see-all">See all</button>
          </div>
          
          <HotelCard 
            name="Hotel Royal Blue"
            location="Zurich, Switzerland"
            price={480}
            rating={4.8}
            image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
            size="large"
          />
        </section>

        <section className="low-cost-hotels">
          <div className="section-header">
            <h2>Low Cost Hotels</h2>
          </div>
          
          <HotelCard 
            name="Warwick Grand Hotel"
            location="New York"
            price={180}
            rating={4.2}
            image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
            size="small"
          />
          
          <HotelCard 
            name="Water Garden Int"
            location="Paris"
            price={150}
            rating={4.4}
            image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
            size="small"
          />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

// export default App;