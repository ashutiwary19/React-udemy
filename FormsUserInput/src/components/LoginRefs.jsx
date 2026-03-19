import { useRef, useState } from "react";

export default function LoginRefs() {
  const email = useRef();
  const password = useRef();
  // Downside : reseting is harder, ref should not be used as react is unware of change
  // as we are directly changing dom
  function handleFormSubmission(event) {
    console.log("Submitted");
    event.preventDefault();
    console.log("Email : " + email.current.value);
    console.log("Password : " + password.current.value);

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
