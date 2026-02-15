import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: Number(newValue),
    }));
  }

  return (
    <main>
      <Header />
      <UserInput inputValues={inputValues} onInputChange={handleInputChange} />
      <Results inputValues={inputValues} />
    </main>
  );
}

export default App;
