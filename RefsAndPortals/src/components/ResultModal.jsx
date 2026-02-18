export function ResultModal({ result, targetTime, ref }) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>Your {result}</h2>
      <p>Target time: {targetTime} seconds</p>
      <form method="dialog">
        <button>Close</button>
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
