import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState("");
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleSubmit() {
    setNameSubmitted(playerName);
  }

  return (
    <section id="player">
      <h2>Welcome {nameSubmitted}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
