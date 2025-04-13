
// base
import styles from './PreferencesTextColor.module.css'
import { useState } from 'react';


// components
import PreferencesPanelButtons from '../PreferencesPanelButtons/PreferencesPanelButtons';
import PreferencesTextPreview from '../PreferencesTextPreview/PreferencesTextPreview';

const PreferencesTextColor = ({  textColor, arrayTextColor, improveTextColor, togglePanel, isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? styles.themeLight : styles.themeDark
    // base
    const [currentTextColorIndex, setCurrentTextColorIndex] = useState(arrayTextColor.findIndex(item => item === textColor))
    const [currentTextColor, setCurrentTextColor] = useState(arrayTextColor[currentTextColorIndex])


    // function
    const toggleTextColor = (option) => {
        setCurrentTextColor(option)
    }

    return (
        <div className={`${styles.containerPreference} ${styleTheme}`}>

            <h3 className={styles.titlePreference}>Text color</h3>

            <ul className={styles.list}>
                {arrayTextColor.map(item => {
                    return <li className={`${styles.buttonColor} ${currentTextColor === item ? styles.colorActive : ''}`} style={{backgroundColor: item !== 'default' ? item : isThemeLight ? 'black' : 'white' }} onClick={() => toggleTextColor(item)}></li>
                })}
            </ul>

            <PreferencesPanelButtons togglePanel={togglePanel} fn={improveTextColor} value={currentTextColor} />
            <PreferencesTextPreview type={'text_color'} value={currentTextColor} isThemeLight={isThemeLight} />

        </div>
    )
}

export default PreferencesTextColor;