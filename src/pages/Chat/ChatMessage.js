import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="sender">{message.sender}</div>
      <div className="text">{message.text}</div>
    </div>
  );
};

export default ChatMessage;
