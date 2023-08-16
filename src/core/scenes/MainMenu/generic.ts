import { MainMenuAction } from './actions';

class MainMenu {
    actions: MainMenuAction[];

    constructor(actions: MainMenuAction[]) {
        this.actions = actions;
    }

    displayMenu() { }

    selectAction(action: number) { }
}

export default MainMenu;
