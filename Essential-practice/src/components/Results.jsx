import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputValues }) {
  const results = calculateInvestmentResults(inputValues);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Investment</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
