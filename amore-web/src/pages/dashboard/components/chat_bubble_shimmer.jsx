import React from "react";
import PinkShimmer from "../../../copmonents/pink_shimmer";
const ChatBubbleShimmer = () => {
  return (
    <>
      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="100px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="50px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-reciever ">
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-reciever">
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-reciever">
        <PinkShimmer height="70px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="50px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-sender ">
        <PinkShimmer width="42px" height="42px" rounded={"50%"} />
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>

      <div className="chat-bubble-shimmer chat-bubble-shimmer-reciever ">
        <PinkShimmer height="40px" rounded={"12px"} />
      </div>
    </>
  );
};

export default ChatBubbleShimmer;
