import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggling, setAllowToggling] = useState(false);

  const handleToggling = () => {
    setAllowToggling(!allowToggling);
  };

  const handleToggleParagraph = useCallback(() => {
    if (allowToggling) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggling]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={handleToggling}>Allow Toggling</Button>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={handleToggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
