import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "../Chat/ChatMessage";
import ChatInput from "../Chat/ChatInput";

import '../../css/ChatScreen.css';

const ChatAirport = ({ character, onTextChange }) => {
  const [messages, setMessages] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleSendMessage = (message) => {
    const newMessage = { sender: character, text: message };

    // Send newMessage to the backend

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleTextChange = (text) => {
    onTextChange(text); // Call the onTextChange prop
  };

  const airportQuestions = [
    "공항에 도착했습니다. 다음으로 무엇을 할까요?", // 호텔로 이동
    "호텔의 예약이 취소되었습니다. 다음으로 무엇을 할까요?",
    "어떤 관광지로 갈까요?",
  ];

  if (questionIndex === airportQuestions.length) {
    onTextChange("");
  }

  const handleNext = () => {
    console.log("Next button clicked");
    navigate(`/${encodeURIComponent(character)}/options`);
  };

  return (
    <div className="chat-screen">
      {/* 메시지 내용 */}
      {/*<div className="messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        </div>*/}

      {/* 현재 질문 및 input */}
      {questionIndex < airportQuestions.length && (
        <div className="question">
          <p>{airportQuestions[questionIndex]}</p>
          <ChatInput onSendMessage={handleSendMessage} onTextChange={handleTextChange} />
        </div>
      )}

      {/* 다음 버튼 */}
      {questionIndex === airportQuestions.length && (
        <button onClick={handleNext}>다음</button>
      )}
    </div>
  );
};

export default ChatAirport;
