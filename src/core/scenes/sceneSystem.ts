import {
    Choice,
    UIMethods,
    SceneState,
    AudioConfig,
    DebugMethods,
    DisplayMethods,
    SettingsConfig,
    CharacterSprite,
    SaveLoadMethods,
    AnimationMethods,
    InteractionHandlers,
} from '../types';

class VisualNovelScene<T> {
    background: string = '';
    backgroundMusic: string = '';
    characters: CharacterSprite[] = [];
    textBlocks: string[] = [];
    currentTextIndex: number = 0;
    choices: Choice[] = [];
    events: (() => void)[] = [];
    transitions: (() => void)[] = [];
    state: SceneState = { dialogueProgress: 0, selectedChoiceIndex: 0 };
    audio: AudioConfig = { backgroundMusic: '', soundEffects: [] };
    display: DisplayMethods = { update: () => { }, render: () => { } };
    interaction: InteractionHandlers = { handleChoice: () => { }, handleEvent: () => { } };
    animation: AnimationMethods = { playCharacterAnimation: () => { }, playTransitionAnimation: () => { } };
    saveLoad: SaveLoadMethods = { save: () => { }, load: () => { } };
    ui: UIMethods = { renderUI: () => { }, updateUI: () => { } };
    settings: SettingsConfig = { textSpeed: 1, audioVolume: 0 };
    debug: DebugMethods = { skipScene: () => { }, inspectVariables: () => { }, logErrors: () => {} };
    customFields: T;

    constructor(customFields: T) {
        this.customFields = customFields;
    }
}

export default VisualNovelScene;