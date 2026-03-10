import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel, isOpen }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    if (!open) return;
    setRemainingTime(TIMER);
    console.log("Interval :", remainingTime);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm, isOpen]);
  // If add onConfirm function to dependency it will go to infinite loop
  // Why every re-render function object is created again
  // We can use useCallback hook to solve this problem
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
