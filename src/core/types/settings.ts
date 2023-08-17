export type Language = 'English' | 'Japanese' | 'Chinese' | string;

export interface Settings {
    language: Language;
    masterVolume: number;
    musicVolume: number;
    soundEffectsVolume: number;
    voiceVolume: number;
}
