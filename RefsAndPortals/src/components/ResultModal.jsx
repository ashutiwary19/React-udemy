import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export function ResultModal({ targetTime, timeRemaining, onReset, ref }) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
  }));

  return createPortal(
    <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
      <h2>You {timeRemaining <= 0 ? "lost" : "won"}!</h2>
      <p>Target time: {targetTime} seconds</p>
      <p>Time remaining: {timeRemaining} ms</p>
      <form method="dialog">
        <button>Reset Challenge</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
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
