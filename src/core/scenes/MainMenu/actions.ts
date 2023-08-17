import { useLocalization } from '../../hooks/localizationContext';
import { MainMenuTranslations } from '../../translations';

export interface MainMenuAction {
    labelKey: keyof MainMenuTranslations;
    action: (changeScene: (scene: string) => void) => void;
    getLabel: () => string;
}

export const CreateMainMenuAction = (
    labelKey: keyof MainMenuTranslations,
    action: (changeScene: (scene: string) => void) => void,
    translations: MainMenuTranslations
): MainMenuAction => {
    return {
        labelKey,
        action,
        getLabel: () => translations[labelKey],
    };
};

export const MainMenuActionCreator = () => {
    const { translations } = useLocalization();

    const startGameAction: MainMenuAction = CreateMainMenuAction(
        'startButtonText',
        (changeScene) => {
            changeScene('StartGame');
        },
        translations.mainMenu
    );

    const menuSettingsAction: MainMenuAction = CreateMainMenuAction(
        'settingsButtonText',
        (changeScene) => {
            changeScene('MenuSettings');
        },
        translations.mainMenu
    );

    return {
        startGameAction,
        menuSettingsAction,
    };
};
