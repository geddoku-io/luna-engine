import React, { useEffect, useState } from "react";

import { useAssets } from "./core";

const App: React.FC = () => {
  const { loadAllAssets } = useAssets();
  
  const [loadedAssets, setLoadedAssets] = useState<any | null>(null);

  useEffect(() => {
    async function loadAssets() {
      const assets = await loadAllAssets();
      setLoadedAssets(assets);
    }

    loadAssets();
  }, []);

  if (!loadedAssets) {
    return <div>Loading...</div>;
  }

  return <div>Loaded</div>;
};

export default App;
