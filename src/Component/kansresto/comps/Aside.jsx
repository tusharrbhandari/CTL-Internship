import React, { useState } from 'react';
import { Clock, Filter, Minus, Plus } from 'lucide-react';

const categories = [
  'All', 'Main Course', 'Appetizer', 'Dessert', 'Side Dishes', 'Beverages', 'Kids'
];

const specialItems = [
  {
    id: 1,
    name: 'Tomato with Tofu Salad',
    price: 97750,
    available: 12,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    discount: true
  },
  {
    id: 2,
    name: 'Japanese Chicken Gyoza',
    price: 81700,
    available: 8,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf',
    discount: true
  },
  {
    id: 3,
    name: '2pcs of Amazing Avocado',
    price: 48000,
    available: 10,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578',
    discount: true
  },
  {
    id: 4,
    name: 'Lettuce with Stuff',
    price: 170000,
    available: 5,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    discount: true
  }
];

const menuItems = [
  {
    id: 5,
    name: 'Biscuit Mama with Susu',
    price: 60000,
    available: 21,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35'
  },
  {
    id: 6,
    name: 'Krosang Thats It',
    price: 78000,
    available: 9,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759'
  },
  {
    id: 7,
    name: 'Strawberry Float',
    price: 45000,
    available: 14,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e'
  },
  {
    id: 8,
    name: 'Healthy Kids Meal',
    price: 83000,
    available: 16,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352'
  }
];

export function Aside() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderedItems, setOrderedItems] = useState([]);

  const handleOrder = (itemId,number) => {
    setOrderedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="app-container">
      <div className="menu-container">
        <div className="header">
          <div className="special-discount">
            <h2>Special Discount Today</h2>
            <div className="timer">
              <Clock size={16} />
              <span>Ends in 12:10:09</span>
            </div>
          </div>
        </div>

        <div className="special-items">
          {specialItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} />
              <div className="available">Available: {item.available}</div>
              <h3>{item.name}</h3>
              <div className="price-section">
                <div className="price">
                  <span className="currency">Rp</span>
                  {item.price.toLocaleString()}
                </div>
                <div className="quantity">
                  <button className="quantity-btn">
                    <Minus size={16} />
                  </button>
                  <span>2</span>
                  <button className="quantity-btn">
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  className={`order-btn ${orderedItems.includes(item.id) ? 'ordered' : ''}`}
                  onClick={() => handleOrder(item.id)}
                >
                  {orderedItems.includes(item.id) ? 'Ordered' : 'Order'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-section">
          <div className="section-header">
            <h2>Explore Our Best Menu</h2>
            <button className="view-all">View All</button>
          </div>
          
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${category === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
            <button className="filter-btn">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} />
                <div className="available">Available: {item.available}</div>
                <h3>{item.name}</h3>
                <div className="price-section">
                  <div className="price">
                    <span className="currency">Rp</span>
                    {item.price.toLocaleString()}
                  </div>
                  <div className="quantity">
                    <button className="quantity-btn">
                      <Minus size={16} />
                    </button>
                    <span>2</span>
                    <button className="quantity-btn">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    className={`order-btn ${orderedItems.includes(item.id) ? 'ordered' : ''}`}
                    onClick={() => handleOrder(item.id)}
                  >
                    {orderedItems.includes(item.id) ? 'Ordered' : 'Order'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;