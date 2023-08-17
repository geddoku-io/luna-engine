import React from 'react';

const mainMenuStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
};

const buttonsContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
};

const buttonStyles: React.CSSProperties = {
    width: '150px',
    marginBottom: '10px',
};

export { mainMenuStyles, buttonsContainerStyles, buttonStyles };
