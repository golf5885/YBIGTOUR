import React, { useState } from "react";
import communicate from "../../communicate";

const ChatStayInput = ({ onSendMessage, setStay }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    communicate
      .post("/hotel", {
        A: message,
        pers_price: "low",
        pers_aspect: "cleanness,facilities,kindness",
      })
      .then((res) => {
        console.log(res.data);
        setStay(res.data);
      });

    event.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={handleInputChange}
      />
      <button type="submit">보내기</button>
    </form>
  );
};

export default ChatStayInput;
