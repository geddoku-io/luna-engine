export interface MainMenuAction {
    label: string;
    action: () => void;
}

export const startGameAction: MainMenuAction = {
    label: 'Start Game',
    action: () => {
        console.log('Starting the game...');
    },
};

export const loadGameAction: MainMenuAction = {
    label: 'Load Game',
    action: () => {
        console.log('Loading the game...');
    },
};

export const exitGameAction: MainMenuAction = {
    label: 'Exit Game',
    action: () => {
        console.log('Exiting the game...');
    },
};
