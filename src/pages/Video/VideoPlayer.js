import ReactPlayer from 'react-player';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatEat from "../Chat/ChatEat";
import ChatStay from "../Chat/ChatStay";
import ChatDo from '../Chat/ChatDo';
import communicate from '../../communicate';

import '../../css/VideoPlayer.css';

const VideoPlayer = ({ setEat, setStay, setDo, playList, onSendMessage }) => {
  const [playIndex, setPlayIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef();
  const location = useLocation();
  const [showChatScreen, setShowChatScreen] = useState(false);
  const [guideText, setGuideText] = useState(""); // 입력된 텍스트 저장
  const [chatComponent, setChatComponent] = useState(null);
  const [Type, setType] = useState({});
  const [message, setMessage] = useState("");

  // 앞 턴의 영상 재생 //

  useEffect(() => {
    const option = location.pathname.split('/').pop();
    const optionIndex = playList.findIndex((video) => video.option === option);
    if (optionIndex !== -1) {
      setPlayIndex(optionIndex);
    }
  }, [location.pathname, playList]);

  // 영상 pause //

  const handleProgress = (progress) => {
    const currentVideo = playList[playIndex];
    if (progress.playedSeconds >= currentVideo.endTime) {
      setIsPlaying(false);
      playerRef.current.seekTo(currentVideo.startTime, 'seconds');
      setShowChatScreen(true);
      setGuideText("");
    }
  };


  // input 창에 메시지 입력하고 보내기 버튼 누름 //
  
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // const handleInputSubmit = (event) => {
  //   event.preventDefault();
  //   onSendMessage(message);
  //   setMessage("");
  // };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }

  // 다음 버튼 누름 //

  const handleNext = () => {
    // const category =
    determineNextScreen(); // 다음 화면 결정
  };

  const handleTextChange = (text) => {
    setGuideText(text);
    }
  };

  const determineNextScreen = (text) => {
    if (text.trim() !== "") {
      const category = zeroShotClassification(text);
      if (category === "food") {
        setChatComponent(<ChatEat character={playList[playIndex].option} onTextChange={setGuideText} setEat={setEat}/>);
      } else if (category === "hotel") {
        setChatComponent(<ChatStay character={playList[playIndex].option} onTextChange={setGuideText} setStay={setStay}/>);
      } else if (category === "attraction") {
        setChatComponent(<ChatDo character={playList[playIndex].option} setDo={setDo} />);
      }
    }
  };

  const zeroShotClassification = (text) => {
    communicate.post("/what", { A: text }).then((res) => {
      setType(res.data.what);
    })
    // 관광지, 음식, 호텔 분류 모델 리턴
    // food, hotel, attraction 중 하나 받아옴
  };



  return (
    <div className="video-chat-container">
      <div className="video-player-container">
        <ReactPlayer
          ref={playerRef}
          url={process.env.PUBLIC_URL + playList[playIndex].url}
          playing={isPlaying}
          controls={false}
          muted={true}
          progressInterval={1000}
          onProgress={handleProgress}
          pip={true}
          width={'100%'}
          height={'100%'}
          onStart={() => playerRef.current.seekTo(playList[playIndex].startTime, 'seconds')}
        />
      </div>
      {showChatScreen && (
          <div className="chat-screen-container">
            {guideText === "" && <p>다음으로 무엇을 할까요?</p>}
            <p>{guideText}</p>
            {/* 인풋 */}
            <div className="chat-input">
              <input
                type="text"
                placeholder="입력하세요..."
                value={message}
                onChange={handleInputChange}
              />
              <button onClick={handleSendClick}>보내기</button>
            </div>
            {/* 다음 버튼 */}
            <button className="next-button" onClick={handleNext}>
              다음
            </button>

            {/* ChatDo, ChatStay, ChatEat 중 결정된 컴포넌트로 연결 */}
      {!showChatScreen && chatComponent && (
              <div className="chat-component">{chatComponent} 
              </div>)}
            </div>)}
          </div>
  );
};

export default VideoPlayer;
