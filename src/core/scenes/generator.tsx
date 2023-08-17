import React from 'react';
import SceneConfig from './sceneConfig.json';

export const renderScene = (sceneName: string, sceneProps?: any): React.ReactNode => {
    const sceneConfig = SceneConfig.find(config => config.name === sceneName);
    if (!sceneConfig) {
        return null;
    }

    const SceneComponent = require(`./${sceneConfig.name}/scene`).default;
    return <SceneComponent {...sceneProps} />;
};
