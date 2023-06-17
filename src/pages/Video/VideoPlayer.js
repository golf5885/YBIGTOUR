import ReactPlayer from 'react-player';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatEat from "../Chat/ChatEat";
import ChatStay from "../Chat/ChatStay";
import ChatDo from '../Chat/ChatDo';

import '../../index.css';

const VideoPlayer = () => {
  const [playIndex, setPlayIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef();
  const location = useLocation();
  const [showChatScreen, setShowChatScreen] = useState(false);
  const [guideText, setGuideText] = useState("");

  const handleTextChange = (text) => {
    setGuideText(text);
    if (text !== "") {
      setIsPlaying(false);
      setShowChatScreen(true);
    }
  };

  const playList = [
    { option: 'louvre-museum', url: '/videos/louvre-museum.mp4', startTime: 1, endTime: 5 },
    { option: 'arc-de-triomphe', url: '/videos/arc-de-triomphe.mp4', startTime: 1, endTime: 5 },
    { option: 'centre-pompidu', url: '/videos/centre-pompidu.mp4', startTime: 1, endTime: 5 },
    { option: 'seine-river', url: '/videos/seine-river.mp4', startTime: 1, endTime: 5 },
    // Add more locations and adjust start/end times as needed
    // 백엔드에서 받아야 함
  ];

  useEffect(() => {
    const option = location.pathname.split('/').pop();
    const optionIndex = playList.findIndex((video) => video.option === option);
    if (optionIndex !== -1) {
      setPlayIndex(optionIndex);
    }
  }, [location.pathname, playList]);

  const handleProgress = (progress) => {
    const currentVideo = playList[playIndex];
    if (progress.playedSeconds >= currentVideo.endTime) {
      setIsPlaying(false);
      playerRef.current.seekTo(currentVideo.startTime, 'seconds');
      setShowChatScreen(true);
    }
  };

  if (playList === null) return <p>Loading...</p>;

  return (
    <div ClassName="video-chat-container">
      <div className="video-player-container">
        <ReactPlayer
          ref={playerRef}
          url={process.env.PUBLIC_URL + playList[playIndex].url}
          playing={isPlaying}
          controls={false}
          muted
          progressInterval={1000}
          onProgress={handleProgress}
          pip={true}
          width={'100%'}
          height={'100%'}
          onStart={() => playerRef.current.seekTo(playList[playIndex].startTime, 'seconds')}
        />
      </div>
      {showChatScreen && (
        <div className="chat-screen-overlay">
          <div className="chat-screen-container">
            <p>{guideText}</p>
            <ChatStay
              character={playList[playIndex].option}
              onTextChange={handleTextChange} // 여기가 변경되어야 함
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
