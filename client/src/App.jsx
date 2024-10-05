import { useState, useEffect } from "react";
import ControlPanel from "./components/ControlPanel";
import Player from "./components/Player";
import axios from "axios";
import "./index.css";

const initialPlayer = { name: "", social: "", score: 0 };

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState("SAVE");
  const [p1, setP1] = useState(initialPlayer);
  const [p2, setP2] = useState(initialPlayer);
  const [round, setRound] = useState("");

  const handleSwap = () => {
    const temp = p1;
    setP1(p2);
    setP2(temp);
  };

  const handleReset = () => {
    setP1(initialPlayer);
    setP2(initialPlayer);
  };

  const handleSave = () => {
    setLoading(true);
    setStatus("...");
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}scoreboard`, {
        player1: p1.name,
        social1: p1.social,
        score1: p1.score,
        player2: p2.name,
        social2: p2.social,
        score2: p2.score,
        round: round,
      })
      .then(res => {
        setLoading(false);
        setStatus("SAVE");
      })
      .catch(err => {
        setStatus(err.code);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}scoreboard`)
      .then(res => {
        const data = res.data;
        setP1({ name: data.player1, social: data.social1, score: data.score1 });
        setP2({ name: data.player2, social: data.social2, score: data.score2 });
        setRound(data.round);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <Player player={p1} setPlayer={setP1} autofocus={true} />
      <Player player={p2} setPlayer={setP2} autofocus={false} />
      <ControlPanel
        round={round}
        setRound={setRound}
        handleSwap={handleSwap}
        handleSave={handleSave}
        handleReset={handleReset}
        isLoading={isLoading}
        status={status}
      />
    </>
  );
};

export default App;
