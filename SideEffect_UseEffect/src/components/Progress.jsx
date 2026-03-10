import { useState, useEffect } from "react";

const TIMER = 3000;

export default function Progress({ handleAutoClose, depdendent }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    setRemainingTime(TIMER);
    console.log("Interval :", remainingTime);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [depdendent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleAutoClose();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [handleAutoClose, depdendent]);
  return <progress value={remainingTime} max={TIMER} />;
}
