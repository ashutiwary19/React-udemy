import Progress from "./Progress";

export default function DeleteConfirmation({ onConfirm, onCancel, isOpen }) {
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
      <Progress handleAutoClose={onConfirm} depdendent={isOpen} />
    </div>
  );
}
