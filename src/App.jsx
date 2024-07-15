import { useState } from "react";
import LandingPage from "./components/LandingPage";
import PlayGame from "./components/PlayGame";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  };

  return (
    <>
      {isGameStarted ? <PlayGame /> : <LandingPage toggle={toggleGamePlay} />}
    </>
  );
};

export default App;
