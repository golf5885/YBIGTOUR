import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../../css/Options.css";

const OptionsDo = ({ Do, setPlayList }) => {
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

  const [optionsData, setOptionsData] = useState(
      {title: "Arc de Triomphe", key: "arc-de-triomphe", lat: 48.87386284, lng: 2.295142541, review_summary: "Arc de Triomphe is a must-see Paris attraction. It's located in a roundabout, where some streets converge. There are 300+ stairs to the top, but the view makes it worth it. The views from the terrace are very much appreciated. The view from the top is amazing. It was my favorite place in our 12 days in Paris."},
      {title: "Centre Pompidu", key: "centre-pompidu", lat: 48.8607055, lng: 2.352920914, review_summary: "Centre Pompidou is one of the most interesting museums in Paris. The modern part on the fifth floor represents the period between 1905 and 1965. The contemporary art is located on the fourth floor and contains many interesting works of art created after 1965. It can be difficult to know how to transverse between the floors but not the worst than the Louvre."},
      {title: "Louvre Museum", key: "louvre-museum", lat: 48.86073106, lng: 2.338287727, review_summary: "Louvre museum is a world class museum. It's too crowded to see all the important pieces. The maps are useless and the galleries are numbered way up high and hard to see. Mona Lisa was rammed but elsewhere was not crowded. The museum is expensive but it's worth the visit."},
      {title: "Notre Dame", key: "notre-dame", lat: 48.853039, lng: 2.350352834, review_summary: "After the fire some years ago, Notre Dame has been closed to the public, but it's still impressive to see from the outside. It's still worthwhile to go, but don't plan on tours any time soon. There are bleachers outside so people can watch the repair work going on."},
      {title: "Seine River", key: "seine-river", lat: 48.69549507, lng: 2.578481696, review_summary: "Take a boat ride on the Seine River to see Paris from a different angle. Watch for the Eiffel Tower's light show in the early evening. Take a batobus or bateaux mouches that offer narrated cruises with or without meals."},
      {title: "Sacre Coeur", key: "sacre-coeur", lat: 48.88685978, lng: 2.343973333, review_summary: "There are nearly 40,000 Tripadvisor reviews on the site about Basilique Du Sacre Coeur De Montmartre. It's a national monument in France,constructed between 1875-1914 and built from designs from architect Paul Abadie. The biggest complaint from tourists is running the gauntlet of aggressive panhandlers and con artists lurking around the staircase leading up to the church."},);

  const handleDataUpdate = useCallback(() => {
    const unpackedOptions = {};
    Do.forEach((place) => {
      unpackedOptions[place.key] = place.title;
    });

    setOptionsData(unpackedOptions);

    const updatedPlayList = Do.map((place) => ({
      option: place.key,
      url: `/videos/${place.key}.mp4`,
      startTime: 1,
      endTime: 5,
    }));
    setPlayList(updatedPlayList);
  }, [Do, setPlayList]);

  useCallback(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  const handleOptionClick = (option) => {
    navigate(
      `/${encodeURIComponent(character)}/video/${encodeURIComponent(option)}`
    );
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

export default OptionsDo;
