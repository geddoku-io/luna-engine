import React from "react";
import { useLocalization } from "../../hooks/localizationContext";

import { mainMenuStyles, buttonsContainerStyles, buttonStyles } from "./styles";

interface MainMenuAction {
  label: string;
  action: (changeScene: (scene: string) => void) => void;
  getLabel: () => string;
}

interface MainMenuSceneProps {
  actions: MainMenuAction[];
  changeScene: (scene: string) => void;
}

const MainMenu: React.FC<MainMenuSceneProps> = ({ actions, changeScene }) => {
  const { translations } = useLocalization();

  return (
    <div style={mainMenuStyles}>
      <h1>{translations.mainMenu.title}</h1>
      <div style={buttonsContainerStyles}>
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => action.action(changeScene)}
            style={buttonStyles}
          >
            {action.getLabel()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
