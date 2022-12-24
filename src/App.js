import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Nav_bar from "./components/nav_bar";
import HighScore from "./components/highScore";
import Game from "./components/game";



function App() {
  return (
    <>
      <Nav_bar />

      <Routes>
        <Route path="/HighScore" element={<HighScore />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </>

  );
}

export default App;
