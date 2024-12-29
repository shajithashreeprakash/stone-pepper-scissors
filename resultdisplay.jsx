import React from "react";

const ResultDisplay = ({ playerChoice, computerChoice, result }) => {
  return (
    <div>
      <h3>Your Choice: {playerChoice}</h3>
      <h3>Computer's Choice: {computerChoice}</h3>
      <h2>{result}</h2>
    </div>
  );
};

export default ResultDisplay;
