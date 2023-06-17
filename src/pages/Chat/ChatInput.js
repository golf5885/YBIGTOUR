import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSendClick}>보내기</button>
    </div>
  );
};

export default ChatInput;
