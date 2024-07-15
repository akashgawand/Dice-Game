import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";

const PlayGame = () => {
  const [SelectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if (SelectedNumber === undefined) {
      setError("Please select a number before rolling the dice.");
      return;
    }

    const randomNumber = GenerateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (randomNumber === SelectedNumber) {
      setScore((prev) => prev + CurrentDice);
    } else {
      setScore((prev) => prev - 2);
    }

    setError("");
  };

  const resetGame = () => {
    setSelectedNumber();
    setCurrentDice(1);
    setScore(0);
    setError("");
  };

  return (
    <>
      <Nav>
        <TotalScore score={score} />
        <NumberSelector
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Nav>
      <Main>
        <RollDice CurrentDice={CurrentDice} rollDice={rollDice} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ResetButton onClick={resetGame}>Reset</ResetButton>
      </Main>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

export default PlayGame;
