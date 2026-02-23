import { useImperativeHandle, useRef } from "react";

export function ResultModal({ targetTime, timeRemaining, onReset, ref }) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
  }));

  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You {timeRemaining <= 0 ? "lost" : "won"}!</h2>
      <p>Target time: {targetTime} seconds</p>
      <p>Time remaining: {timeRemaining} ms</p>
      <form method="dialog">
        <button onClick={onReset}>Reset Challenge</button>
      </form>
    </dialog>
  );
}
/*
// This is old way of creating a forward ref component. We can also use React.forwardRef to create a forward ref component in a more concise way.
const ResultModel = React.forwardRef(({ result, targetTime }, ref) => {
  return (    
    <dialog className="result-modal" ref={ref}>
      <h2>Your {result}</h2>
      <p>Target time: {targetTime} seconds</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
*/
