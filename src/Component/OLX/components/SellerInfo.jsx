import React from 'react';
import './SellerInfo.css';
import { MessageCircle } from 'lucide-react';

const SellerInfo = ({ seller }) => {
  return (
    <div className="seller-container">
      <div className="seller-info">
        <img src={seller.avatar} alt={seller.name} className="seller-avatar" />
        <h3>{seller.name}</h3>
      </div>
      <button className="chat-button">
        <MessageCircle size={20} />
        Chat with seller
      </button>
    </div>
  );
};

export default SellerInfo;