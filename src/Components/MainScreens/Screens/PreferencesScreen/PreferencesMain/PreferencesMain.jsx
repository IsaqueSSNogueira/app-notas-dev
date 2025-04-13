
// components
import PreferencesGeneral from './PreferencesGeneral/PreferencesGeneral';
import PreferencesNoteDefaults from './PreferencesNoteDefaults/PreferencesNoteDefaults';


// base
import {useEffect, useState } from 'react';
import style from './PreferencesMain.module.css';



const PreferencesMain = ({ isThemeLight, toggleTheme, notificationsEnabled, toggleNotificationsState }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    return (

        <main className={`${style.preferencesMain} ${styleTheme}`}>
            <PreferencesGeneral toggleTheme={toggleTheme} isThemeLight={isThemeLight} notificationsEnabled={notificationsEnabled} toggleNotificationsState={toggleNotificationsState} />
            <PreferencesNoteDefaults isThemeLight={isThemeLight} />
        </main>
    )
}

export default PreferencesMain;