import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  // const [playerName, setPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState("");
  /* function handleChange(e) {
    setPlayerName(e.target.value);
  } */

  // Difference between state and ref is that state causes a re-render when it changes, while ref does not. In this case, we want to update the nameSubmitted state when the user clicks the button, but we don't want to re-render the component every time the user types in the input field. By using a ref, we can access the current value of the input field without causing a re-render.
  function handleSubmit() {
    // setNameSubmitted(playerName);
    setNameSubmitted(inputRef.current.value);
    inputRef.current.value = "";
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
