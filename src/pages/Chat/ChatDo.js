import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import ChatDoInput from "./ChatDoInput";

import '../../css/ChatScreen.css';

const ChatDo = ({ character, onTextChange, Do, setDo }) => {
  // const [messages, setMessages] = useState([]);
  // const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
  //   communicate.post('/place',
  //   { lat,
  //     lng,
  //     pers_far
  //   }).then((res) => {
  //   setDo(res.data);
  //  })

  setDo([
    {title: "Arc de Triomphe", key: "arc-de-triomphe", lat: 48.87386284, lng: 2.295142541, review_summary: "Arc de Triomphe is a must-see Paris attraction. It's located in a roundabout, where some streets converge. There are 300+ stairs to the top, but the view makes it worth it. The views from the terrace are very much appreciated. The view from the top is amazing. It was my favorite place in our 12 days in Paris."},
    {title: "Centre Pompidu", key: "centre-pompidu", lat: 48.8607055, lng: 2.352920914, review_summary: "Centre Pompidou is one of the most interesting museums in Paris. The modern part on the fifth floor represents the period between 1905 and 1965. The contemporary art is located on the fourth floor and contains many interesting works of art created after 1965. It can be difficult to know how to transverse between the floors but not the worst than the Louvre."},
    {title: "Louvre Museum", key: "louvre-museum", lat: 48.86073106, lng: 2.338287727, review_summary: "Louvre museum is a world class museum. It's too crowded to see all the important pieces. The maps are useless and the galleries are numbered way up high and hard to see. Mona Lisa was rammed but elsewhere was not crowded. The museum is expensive but it's worth the visit."},
    {title: "Notre Dame", key: "notre-dame", lat: 48.853039, lng: 2.350352834, review_summary: "After the fire some years ago, Notre Dame has been closed to the public, but it's still impressive to see from the outside. It's still worthwhile to go, but don't plan on tours any time soon. There are bleachers outside so people can watch the repair work going on."},
    {title: "Seine River", key: "seine-river", lat: 48.69549507, lng: 2.578481696, review_summary: "Take a boat ride on the Seine River to see Paris from a different angle. Watch for the Eiffel Tower's light show in the early evening. Take a batobus or bateaux mouches that offer narrated cruises with or without meals."},
    {title: "Sacre Coeur", key: "sacre-coeur", lat: 48.88685978, lng: 2.343973333, review_summary: "There are nearly 40,000 Tripadvisor reviews on the site about Basilique Du Sacre Coeur De Montmartre. It's a national monument in France,constructed between 1875-1914 and built from designs from architect Paul Abadie. The biggest complaint from tourists is running the gauntlet of aggressive panhandlers and con artists lurking around the staircase leading up to the church."},
  ]);

  },[]);


  useEffect(() => {
    if (Do.length > 0){
      handleNext()
    }
  }, [Do])

  const handleNext = () => {
    console.log("Next button clicked");
    navigate(`/${encodeURIComponent(character)}/options/do`);
  };

  // const handleSendMessage = (message) => {
  //   const newMessage = { sender: character, text: message };
  //   setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   setQuestionIndex((prevIndex) => prevIndex + 1);
  // };

  // const handleTextChange = (text) => {
  //   onTextChange(text); // Call the onTextChange prop
  // };

  // const videoDoQuestions = [

  // ];

  // if (questionIndex === videoDoQuestions.length) {
  //   onTextChange("");
  // }



  // return (
  //   <div className="chat-screen">
  //     {/* 메시지 내용 */}
  //     {/*<div className="messages">
  //       {messages.map((message, index) => (
  //         <ChatMessage key={index} message={message} />
  //       ))}
  //       </div>*/}

  //     {/* 현재 질문 및 input */}
  //     {questionIndex < videoDoQuestions.length && (
  //       <div className="question">
  //         <p>{videoDoQuestions[questionIndex]}</p>
  //         <ChatDoInput onSendMessage={handleSendMessage} onTextChange={handleTextChange} setDo={setDo}/>
  //       </div>
  //     )}

  //     {/* 다음 버튼 */}
  //     {questionIndex === videoDoQuestions.length && (
  //       <button onClick={handleNext}>다음</button>
  //     )}



  //   </div>
  // );
};

export default ChatDo;
