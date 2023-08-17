import React, { useEffect, useState } from "react";

import { loadingStyles } from "./styles";

import { useAssets } from "./core";

import { MainMenuActionCreator } from "./core/scenes/MainMenu";
import { renderScene } from "./core/scenes/generator";

const App: React.FC = () => {
  const { loadAllAssets } = useAssets();
  const { startGameAction, menuSettingsAction } = MainMenuActionCreator();

  const [loadedAssets, setLoadedAssets] = useState<any | null>(null);
  const [currentScene, setCurrentScene] = useState("MainMenu");

  const changeScene = (scene: string) => {
    setCurrentScene(scene);
  };

  useEffect(() => {
    document.title = "Game Engine";

    setTimeout(() => {
      setLoadedAssets([]);
    }, 3000);

    // async function loadAssets() {
    //   const assets = await loadAllAssets();
    //   setLoadedAssets(assets);
    // }
    //
    // loadAssets();
  }, []);

  const mainMenuActions = [
    { ...startGameAction, action: startGameAction.action },
    { ...menuSettingsAction, action: menuSettingsAction.action },
  ];

  let currentSceneActions = mainMenuActions;

  if (currentScene === "MenuSettings") {
  }

  if (!loadedAssets) {
    return <div style={loadingStyles}>Loading...</div>;
  }

  return (
    <div>
      {renderScene(currentScene, {
        changeScene,
        actions: currentSceneActions,
      })}
    </div>
  );
};

export default App;
