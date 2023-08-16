import React, { useState } from "react";

import { MainMenu, startGameAction, loadGameAction, exitGameAction } from "./";

const MainMenuScene: React.FC = () => {
  const mainMenu = new MainMenu([
    startGameAction,
    loadGameAction,
    exitGameAction,
  ]);
  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  const handleActionSelection = (action: number) => {
    setSelectedAction(action);
    mainMenu.selectAction(action);
  };

  return (
    <div>
      <h1>Main Menu</h1>

      {mainMenu.actions.map((action, index) => (
        <button key={index} onClick={() => handleActionSelection(index + 1)}>
          {action.label}
        </button>
      ))}

      {selectedAction !== null && (
        <p>Selected: {mainMenu.actions[selectedAction - 1].label}</p>
      )}
    </div>
  );
};

export default MainMenuScene;
