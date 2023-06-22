import ReactPlayer from 'react-player';
import { useState, useRef, useEffect } from 'react';
import ChatEat from "../Chat/ChatEat";
import ChatStay from "../Chat/ChatStay";
import ChatDo from '../Chat/ChatDo';
import ChatCancel from './ChatCancel';
import { useParams } from "react-router-dom";

import '../../css/Cancel.css';

const Cancel = ({ setEat, setStay, setDo, Do, playList }) => {
  const { character } = useParams();
  const [guideText, setGuideText] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [characterVisible, setCharacterVisible] = useState(false);


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
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    if (videoEnded) {
      setCharacterVisible(true);
    }
  }, [videoEnded]);
  
  return (
    <div className="video-chat-container">
      <div className="home-container">
        <ReactPlayer
          url={'/videos/driving.mp4'}
          playing={true}
          controls={false}
          muted={true}
          progressInterval={1000}
          pip={true}
          width={'100%'}
          height={'100%'}
          onEnded={handleVideoEnd}
        />
        {videoEnded && characterVisible && (
          <><div className="selectedCharacter">
            <img
              src={selectedCharacter.img_url}
              alt={selectedCharacter.name} />
          </div><div className="guide_saying">
              <p>{guideText}</p>
              <ChatCancel 
              character={character} 
              onTextChange={handleTextChange} 
              setDo={setDo} 
              setEat={setEat} 
              setStay={setStay} 
              Do={Do}/>
              {/* ChatDo, ChatStay, ChatEat 중 결정된 컴포넌트로 연결
              {chatComponent} */}
            </div></>
      )}
      </div>
    </div>
  );
};

export default Cancel;
