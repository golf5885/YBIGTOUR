import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatScreen = ({ character, onTextChange }) => {
  const [messages, setMessages] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const questions = [
    "샤를 드골 공항에 도착했습니다. 무엇을 하고 싶으신가요?",
    "어떤 음식을 먹고 싶으신가요?",
    "어떤 커피를 먹고 싶으신가요?",
  ];

  const handleSendMessage = (message) => {
    const newMessage = { sender: character, text: message };

    // newMessage를 백엔드로

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleTextChange = (text) => {
    onTextChange(text); // Call the onTextChange prop
  };

  if (questionIndex === questions.length) {
    onTextChange("");
  }

  const handleNext = () => {
    console.log("다음 button clicked");
    navigate(`/Map/${encodeURIComponent(character)}/options`);
  };

  return (
      <div className="chat-screen">
      
      {/* <div className="messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        </div> */}
      {questionIndex < questions.length && (
        <div className="question">
          <p>{questions[questionIndex]}</p>
          <ChatInput onSendMessage={handleSendMessage} onTextChange={handleTextChange} />
        </div>
      )}
      {questionIndex === questions.length && (
        <button onClick={handleNext}>다음</button>
      )}
    </div>
  );
};

export default ChatScreen;
