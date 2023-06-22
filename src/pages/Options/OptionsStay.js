import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../../css/Options.css";

const OptionsStay = ({ Stay, setPlayList }) => {
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

  const selectedCharacter = characters.find((char) => char.name === character);

  const [optionsData, setOptionsData] = useState({});

  const handleDataUpdate = () => {
    const unpackedOptions = {};
    Stay.forEach((place) => {
      unpackedOptions[place.key] = place.title;
    }); // 'place' 항목의 'key'를 객체의 키로, 'title'을 객체의 값으로 할당

    setOptionsData(unpackedOptions);

  // VideoPlayer.js의 playList 업데이트 (App.js에 업데이트 되어 있음)
  const updatedPlayList = Stay.map((place) => {
    return {
      option: place.key,
      url: `/videos/${place.key}.mp4`,
      startTime: 1,
      endTime: 5,
    };
  });
  setPlayList(updatedPlayList);
};  

useCallback(() => {
  handleDataUpdate();
}, [Stay, setPlayList]); // Stay 배열이 변경될 때마다 handleDataUpdate 함수 호출

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
      <div className="option-saying">
        <p>가고 싶은 장소를 선택해 주세요.</p>
      </div>
      <div className="option-buttons">{renderOptions()}</div>
    </div>
  );
};

export default OptionsStay;
