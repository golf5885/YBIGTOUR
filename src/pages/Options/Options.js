import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import airportImage from "../../icons/샤를드골.png";

import "../../css/Options.css";

const Options = () => {
  const navigate = useNavigate();
  const { character } = useParams();

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

  const optionsData = {
    "louvre-museum": "Louvre Museum",
    "arc-de-triomphe": "Arc de Triomphe",
    "centre-pompidu": "Centre Pompidu",
    "seine-river": "Seine River",
    // option string 및 option button label 추가
  };

  const selectedCharacter = characters.find((char) => char.name === character);

  const handleOptionClick = (option) => {
    navigate(`/${encodeURIComponent(character)}/video/${encodeURIComponent(option)}`);
  };

  const renderOptions = () => {
    return Object.entries(optionsData).map(([option, label]) => (
      <button
        key={option}
        className="option-button"
        onClick={() => handleOptionClick(option)}
      >
        {label}
      </button>
    ));
  };

  return (
    <div className="options-container">
      <img src={airportImage} alt="airport" className="airport" />
      {selectedCharacter && (
        <img
          src={selectedCharacter.img_url}
          alt={selectedCharacter.name}
          className="selectedCharacter"
        />
      )}
      <div className="option-saying">
        <p>가고 싶은 장소를 선택해 주세요.</p>
      </div>
      <div className="option-buttons">{renderOptions()}</div>
    </div>
  );
};

export default Options;
