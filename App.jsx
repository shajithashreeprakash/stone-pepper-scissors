import React, { useState } from "react";
import ChoiceButtons from "./ChoiceButtons";
import ResultDisplay from "./ResultDisplay";
import "./App.css";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ["Stone", "Paper", "Scissors"];

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a tie!";
    }
    if (
      (player === "Stone" && computer === "Scissors") ||
      (player === "Paper" && computer === "Stone") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const handleChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const gameResult = determineWinner(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };

  return (
    <div className="App">
      <h1>Stone, Paper, Scissors Game</h1>
      <ChoiceButtons handleChoice={handleChoice} />
      {playerChoice && computerChoice && (
        <ResultDisplay
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
    </div>
  );
};

export default App;

