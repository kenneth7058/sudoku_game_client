import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

import TopNavBar from "./components/TopNavBar";
import HighScore from "./components/highScore";
import Game from "./components/game";

function App() {
  return (
    <>
      <TopNavBar />

      <Routes>
        <Route path="/HighScore" element={<HighScore />} />
        <Route path="/Game" element={<Game />} />
        <Route path="*" element={<Navigate to="/Game" />}
        />
      </Routes>
    </>

  );
}

export default App;
