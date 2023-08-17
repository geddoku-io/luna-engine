import { Language, Settings } from './settings';

export interface Translations {
    [key: string]: string | Translations;
}

export interface AudioConfig {
    backgroundMusic: string;
    soundEffects: string[];
}

export interface DisplayMethods {
    update: () => void;
    render: () => void;
}

export interface InteractionHandlers {
    handleChoice: (choice: Choice) => void;
    handleEvent: (event: () => void) => void;
}

export interface AnimationMethods {
    playCharacterAnimation: (character: CharacterSprite, animation: string) => void;
    playTransitionAnimation: (animation: string) => void;
}

export interface SaveLoadMethods {
    save: () => void;
    load: () => void;
}

export interface UIMethods {
    updateUI: () => void;
    renderUI: () => void;
}

export interface SettingsConfig {
    textSpeed: number;
    audioVolume: number;
}

export interface DebugMethods {
    skipScene: () => void;
    inspectVariables: () => void;
    logErrors: (error: Error) => void;
}

export interface Choice {
    text: string;
    callback: () => void;
}

export interface Character {
    name: string;
    expression: string;
    position: string;
}

export interface CharacterSprite extends Character {
    sprite: string;
}

export interface Scene {
    background: string;
    backgroundMusic: string;
    characters: CharacterSprite[];
    textBlocks: string[];
    currentTextIndex: number;
    choises: Choice[];
    events: (() => void)[];
    transitions: (() => void)[];
    state: SceneState;
    audio: {
        backgroundMusic: string;
        soundEffects: string[];
    };
    display: {
        update: () => void;
        render: () => void;
    };
    interaction: {
        handleChoice: (choice: Choice) => void;
        handleEvent: (event: () => void) => void;
    };
    animation: {
        playCharacterAnimation: (character: CharacterSprite, animation: string) => void;
        playTransitionAnimation: (animation: string) => void;
    };
    saveLoad: {
        save: () => void;
        load: () => void;
    };
    ui: {
        updateUI: () => void;
        renderUI: () => void;
    };
    settings: {
        textSpeed: number;
        audioVolume: number;
    };
    debug: {
        skipScene: () => void;
        inspectVariables: () => void;
        logErrors: (error: Error) => void;
    };
    customFields: {};
}

export interface SceneState {
    dialogueProgress: number;
    selectedChoiceIndex: number;
}

export type { Language, Settings };
