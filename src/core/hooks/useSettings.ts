import { useState } from 'react';

import { Language, Settings } from '../types';

import { settingsDefault } from '../constants';

import { useLocalization } from './localizationContext';

const useSettings = () => {
    const { language, setLanguage } = useLocalization();

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(language || settingsDefault.language);
    const [masterVolume, setMasterVolume] = useState<number>(settingsDefault.masterVolume);
    const [musicVolume, setMusicVolume] = useState<number>(settingsDefault.musicVolume);
    const [soundEffectsVolume, setSoundEffectsVolume] = useState<number>(settingsDefault.soundEffectsVolume);
    const [voiceVolume, setVoiceVolume] = useState<number>(settingsDefault.voiceVolume);

    const getSettings = (): Settings => ({
        language: selectedLanguage,
        masterVolume,
        musicVolume,
        soundEffectsVolume,
        voiceVolume
    });

    const updateSettings = (newSettings: Settings) => {
        setSelectedLanguage(newSettings.language);
        setMasterVolume(newSettings.masterVolume);
        setMusicVolume(newSettings.musicVolume);
        setSoundEffectsVolume(newSettings.soundEffectsVolume);
        setVoiceVolume(newSettings.voiceVolume);
    };

    const updateSetting = (key: keyof Settings, value: any) => {
        switch (key) {
            case 'language':
                setLanguage(value);
                setSelectedLanguage(value);
                break;
            case 'masterVolume':
                setMasterVolume(value);
                break;
            case 'musicVolume':
                setMusicVolume(value);
                break;
            case 'soundEffectsVolume':
                setSoundEffectsVolume(value);
                break;
            case 'voiceVolume':
                setVoiceVolume(value);
                break;
            default:
                break;
        }
    };

    return { getSettings, updateSettings, updateSetting };
};

export default useSettings;
