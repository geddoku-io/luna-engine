const useAssets = () => {
    const loadAllAssets = async () => {
        const loadedAssets: Record<string, any> = {};
        const assetCategories = {
            characters: [],
            backgrounds: [],
        } as Record<string, any>;

        for (const category in assetCategories) {
            const assetPaths = assetCategories[category];
            const categoryAssets = await preloadAssetsByPath(assetPaths);
            categoryAssets.forEach((asset: any, index: number) => {
                loadedAssets[assetPaths[index]] = asset;
            });
        }

        return loadedAssets;
    };

    const preloadAssetsByPath = async (sceneAssetPaths: string[]) => {
        const loadedAssets: Record<string, any> = {};

        for (const assetPath of sceneAssetPaths) {
            const assetName = assetPath.split('/').pop() || '';
            loadedAssets[assetName] = await import(`./assets/${assetPath}`);
        }

        return loadedAssets;
    };

    return {
        loadAllAssets,
        preloadAssetsByPath,
    };
};

export default useAssets;
