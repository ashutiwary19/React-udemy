export default function UserInput({ inputValues, onInputChange }) {
  /*  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: newValue,
    }));
  } */

  function handleInputChange(inputIdentifier, newValue) {
    onInputChange(inputIdentifier, newValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            required
            type="number"
            id="initial-investment"
            name="initial-investment"
            value={inputValues.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            required
            type="number"
            id="annual-investment"
            name="annual-investment"
            value={inputValues.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            required
            id="expected-return"
            name="expected-return"
            value={inputValues.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            name="duration"
            value={inputValues.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
