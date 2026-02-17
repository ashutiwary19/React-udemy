import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  // const [playerName, setPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState("");
  /* function handleChange(e) {
    setPlayerName(e.target.value);
  } */

  function handleSubmit() {
    // setNameSubmitted(playerName);
    setNameSubmitted(inputRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {nameSubmitted}</h2>
      <p>
        <input
          ref={inputRef}
          type="text"
          // value={playerName}
          // onChange={handleChange}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
