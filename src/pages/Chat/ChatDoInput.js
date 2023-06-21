import React, { useState } from "react";

const ChatDoInput = ({ onSendMessage, setDo }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    /*communicate.post('/place',
    { lat,
      lng,
      pers_far
    }).then((res) => {
    setDo(res.data);
   })*/
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
    /*
    <ul>
    {
      ( Do ? (
        Do.map((place) => {
          return (
            <div key={place["title"]}>
              <li> { place["title"] } </li>
              <ul>
                <li> lat: { place["lat"] } </li>    
                <li> lng: { place["lng"] } </li>
                <li> review_summary: { place["review_summary"] } <li>
              </ul>
            </div>
          )
        }))
      : (<li></li>))
    }
  </ul>
  */
  );
};

export default ChatDoInput;