import { useRef } from "react";
import { useState } from "react";
import { ResultModal } from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogRef = useRef();
  const [isWinner, setIsWinner] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  /* function handleStart() {
    setTimerExpired(false);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialogRef.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }
 */

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  /* function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  } */

  const timerStarted = timeRemaining < targetTime * 1000 && timeRemaining > 0;
  if (timeRemaining <= 0) {
    handleResetTimer();
    dialogRef.current.open();
  }

  function handleResetTimer() {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialogRef.current.open();
  }
  console.log("Testing timer", timeRemaining);

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleResetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">{timeRemaining} ms</p>
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
