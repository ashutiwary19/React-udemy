import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // Not a good approach as empty will be valid
  // and even entering one char will give error
  const validEmail = didEdit.email && !enteredValues.email.includes("@");

  function handleValueChange(key, value) {
    setEnteredValues((prevValues) => ({ ...prevValues, [key]: value }));
  }

  function handleInputFocusChange(key, val) {
    setDidEdit((prev) => ({
      ...prev,
      [key]: val,
    }));
  }

  function handleFormSubmission(event) {
    console.log("Submitted");
    event.preventDefault();
    console.log("Email : " + enteredValues.email);
    console.log("Password : 3" + enteredValues.password);
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onFocus={() => handleInputFocusChange("email", false)}
            onBlur={() => handleInputFocusChange("email", true)}
            onChange={(event) => handleValueChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {validEmail && <p>Please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleValueChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
