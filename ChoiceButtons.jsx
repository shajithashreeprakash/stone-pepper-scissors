import React from "react";

const ChoiceButtons = ({ handleChoice }) => {
  return (
    <div>
      <button onClick={() => handleChoice("Stone")}>Stone</button>
      <button onClick={() => handleChoice("Paper")}>Paper</button>
      <button onClick={() => handleChoice("Scissors")}>Scissors</button>
    </div>
  );
};

export default ChoiceButtons;
