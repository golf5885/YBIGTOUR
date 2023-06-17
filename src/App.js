import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Character from './pages/Character/Character';
import Map from './pages/Map/Map';
import Airport from './pages/Airport/Airport';
import ChatScreen from './pages/Chat/ChatEat';
import Options from './pages/Options/Options';
import VideoPlayer from './pages/Video/VideoPlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/:character/map" element={<Map />} />
        <Route path="/:character/airport" element={<Airport />} />
        <Route path="/:character/options" element={<Options />} />
        <Route path="/:character/video/:option" element={<VideoPlayer />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export default App;
