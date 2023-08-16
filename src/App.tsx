import React, { useEffect, useState } from "react";

import { useAssets } from "./core";

import { MainMenuScene } from "./core/scenes";

const App: React.FC = () => {
  const { loadAllAssets } = useAssets();

  const [loadedAssets, setLoadedAssets] = useState<any | null>(null);

  useEffect(() => {
    document.title = 'Game Engine';

    async function loadAssets() {
      const assets = await loadAllAssets();
      setLoadedAssets(assets);
    }

    loadAssets();
  }, []);

  if (!loadedAssets) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hentai Visual Novel Engine</h1>
      <MainMenuScene />
    </div>
  );
};

export default App;