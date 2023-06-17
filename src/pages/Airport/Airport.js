import React, { useState } from "react";
import "../../css/Airport.css";
import airportImage from "../../icons/샤를드골.png";
import ChatAirport from "./ChatAirport";
import { useParams, Link } from "react-router-dom";

const Airport = () => {
  const { character } = useParams();
  const [guideText, setGuideText] = useState("");

  const characters = [
    {
      name: "민성우",
      style: "먹는 것에 돈을 아끼지 않는다.",
      img_url:
        "https://w7.pngwing.com/pngs/390/806/png-transparent-rilakkuma-kakaotalk-kakao-friends-south-korea-kakaofriends-sticker-desktop-wallpaper-snout-thumbnail.png",
    },
    {
      name: "박유찬",
      style: "박물관과 미술관을 좋아한다.",
      img_url:
        "https://e7.pngegg.com/pngimages/982/1017/png-clipart-kakaotalk-kakao-friends-sticker-line-ryan-smiley-sticker.png",
    },
    {
      name: "서우석",
      style: "현지인들과 어울리기를 좋아한다.",
      img_url:
        "https://e7.pngegg.com/pngimages/825/741/png-clipart-kakaotalk-kakao-friends-sticker-iphone-iphone-electronics-smiley.png",
    },
  ];

  const selectedCharacter = characters.find((char) => char.name === character);

  const handleTextChange = (text) => {
    setGuideText(text);
  };

  return (
    <div className="home-container">
      <img src={airportImage} alt="airport" className="airport" />
      <img
        src={selectedCharacter.img_url}
        alt={selectedCharacter.name}
        className="selectedCharacter"
      />
      <div className="guide_saying">
        <p>{guideText}</p>
        <ChatAirport
          character={character}
          onTextChange={handleTextChange}
        />
      </div>
    </div>
  );
};

export default Airport;
