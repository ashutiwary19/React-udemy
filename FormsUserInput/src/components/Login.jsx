import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    enteredValue: emailValue,
    isValid: isEmailValid,
    handleValueChange: handleEmailChange,
    handleInputFocusChange: handleEmailFocusChange,
  } = useInput("", (emailValue) => !isEmail(emailValue));
  const {
    enteredValue: passwordValue,
    isValid: isPasswordValid,
    handleValueChange: handlePasswordChange,
    handleInputFocusChange: handlePasswordFocusChange,
  } = useInput("", (password) => !hasMinLength(password, 7));

  function handleFormSubmission(event) {
    console.log("Submitted");
    event.preventDefault();
    console.log("Email : " + emailValue);
    console.log("Password : 3" + passwordValue);
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
          error={isEmailValid && "Enter a valid email"}
          onFocus={handleEmailFocusChange}
          onBlur={handleEmailFocusChange}
          onChange={handleEmailChange}
          value={emailValue}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={isPasswordValid && "Enter a valid password"}
          onFocus={handlePasswordFocusChange}
          onBlur={handlePasswordFocusChange}
          onChange={handlePasswordChange}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
