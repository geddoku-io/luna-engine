import React, { useState } from "react";

import useSettings from "../../hooks/useSettings";
import { Language } from "../../types";

interface MenuSettingsAction {
  label: string;
  action: (changeScene: (scene: string) => void) => void;
  getLabel: () => string;
}

interface MenuSettingsProps {
  actions: MenuSettingsAction[];
  changeScene: (scene: string) => void;
}

const MenuSettings: React.FC<MenuSettingsProps> = ({
  actions,
  changeScene,
}) => {
  const { getSettings, updateSetting } = useSettings();
  const settings = getSettings();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    settings.language
  );

  const handleLanguageChange = (newLanguage: Language) => {
    updateSetting("language", newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Settings</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Language</h2>
        <p style={{ fontSize: "16px", marginBottom: "15px" }}>
          Selected Language: {selectedLanguage}
        </p>
        <button
          style={{ fontSize: "14px", padding: "5px 10px", marginRight: "10px" }}
          onClick={() => handleLanguageChange("English")}
        >
          English
        </button>
        <button
          style={{ fontSize: "14px", padding: "5px 10px", marginRight: "10px" }}
          onClick={() => handleLanguageChange("Japanese")}
        >
          Japanese
        </button>
        <button
          style={{ fontSize: "14px", padding: "5px 10px" }}
          onClick={() => changeScene("MainMenu")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MenuSettings;
