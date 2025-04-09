import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import amoreHeartLock from "../../../assets/lottie/amore_heart_lock.json";
const ChatUnlockImage = ({ image, setShowUnlockImage }) => {
  console.log(image);

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    const clear = () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      className="chat-unlock-image"
      onClick={() => setShowUnlockImage(false)}
    >
      {showAnimation && (
        <Lottie animationData={amoreHeartLock} className="amore-heart-lock" />
      )}

      {!showAnimation && (
        <div className="chat-unlock-image-container">
          <img src={image} />
        </div>
      )}
    </div>
  );
};

export default ChatUnlockImage;
