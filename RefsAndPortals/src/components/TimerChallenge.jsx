import { useRef } from "react";
import { useState } from "react";
import { ResultModal } from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogRef = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    setTimerExpired(false);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialogRef.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <>
      <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime !== 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Timer running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
