import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValues] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  function handleValueChange(event) {
    setEnteredValues(event.target.value);
  }

  function handleInputFocusChange() {
    setDidEdit((prev) => !prev);
  }

  const isValid = didEdit && validationFn(enteredValue);

  return {
    enteredValue,
    isValid,
    handleValueChange,
    handleInputFocusChange,
  };
}
