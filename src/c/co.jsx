import { useState } from "react";
import { Heart } from "lucide-react";

const HeartList = () => {
  const [likedHearts, setLikedHearts] = useState(
    Array(1).fill(false) // Change 5 to the number of hearts you need
  );

  const toggleHeart = (index) => {
    setLikedHearts((prev) =>
      prev.map((liked, i) => (i === index ? !liked : liked))
    );
  };

  return (
    <div className="heart-container">
      {likedHearts.map((liked, index) => (
        <div key={index} className="heart-icon" onClick={() => toggleHeart(index)}>
          <Heart className={`heart ${liked ? "filled" : ""}`} />
        </div>
      ))}
    </div>
  );
};

export default HeartList;
