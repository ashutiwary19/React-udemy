import { useState } from "react";
import Input from "./Input";

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
  const validPassword = didEdit.password && enteredValues.password.length < 5;

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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={validEmail && "Enter a valid email"}
          onFocus={() => handleInputFocusChange("email", false)}
          onBlur={() => handleInputFocusChange("email", true)}
          onChange={(event) => handleValueChange("email", event.target.value)}
          value={enteredValues.email}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={validPassword && "Enter a valid password"}
          onFocus={() => handleInputFocusChange("password", false)}
          onBlur={() => handleInputFocusChange("password", true)}
          onChange={(event) =>
            handleValueChange("password", event.target.value)
          }
          value={enteredValues.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
