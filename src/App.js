import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Map from "./pages/Map/Map";
import Airport from "./pages/Airport/Airport";
import OptionsDo from "./pages/Options/OptionsDo";
import OptionsEat from "./pages/Options/OptionsEat";
import OptionsStay from "./pages/Options/OptionsStay";
import VideoPlayer from "./pages/Video/VideoPlayer";
import Cancel from "./pages/Cancel/Cancel";

function App() {
  const [Do, setDo] = useState([]);
  const [Eat, setEat] = useState([]);
  const [Stay, setStay] = useState([]);
  const [playList, setPlayList] = useState([]);

  const updatePlayList = (updatedPlayList) => {
    setPlayList(updatedPlayList);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/:character/map" element={<Map />} />
        <Route path="/:character/airport" element={<Airport />} />
        <Route
          path="/:character/cancel"
          element={
            <Cancel setDo={setDo} setEat={setEat} setStay={setStay} Do={Do} />
          }
        />
        <Route
          path="/:character/options/do"
          element={<OptionsDo Do={Do} setPlayList={updatePlayList} />}
        />
        <Route
          path="/:character/options/eat"
          element={<OptionsEat Eat={Eat} setPlayList={updatePlayList} />}
        />
        <Route
          path="/:character/options/stay"
          element={<OptionsStay Stay={Stay} setPlayList={updatePlayList} />}
        />
        <Route
          path="/:character/video/:option"
          element={
            <VideoPlayer
              setDo={setDo}
              setEat={setEat}
              setStay={setStay}
              playList={playList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
