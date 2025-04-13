
// base
import { useState } from 'react';
import styles from './PreferencesFontFamily.module.css'

// components
import PreferencesPanelButtons from '../PreferencesPanelButtons/PreferencesPanelButtons';
import PreferencesTextPreview from '../PreferencesTextPreview/PreferencesTextPreview';


const PreferencesFontFamily = ({ fontFamily, arrayFontFamily, improveFontFamily, togglePanel, isThemeLight }) => {

    // base
    const [currentFontFamilyIndex, setCurrentFontFamilyIndex] = useState(arrayFontFamily.findIndex(item => item === fontFamily))
    const [currentFontFamily, setCurrentFontFamily] = useState(arrayFontFamily[currentFontFamilyIndex])

    // function
    const toggleFontFamily = (option) => {
            setCurrentFontFamily(option)
    }

    return (
        <div className={styles.containerPreference}>
            <h3 className={styles.titlePreference}>Font Family</h3>
            
            <ul className={styles.list}>
                {arrayFontFamily.map(item => {
                    return <li className={`${styles.itemFont} ${styles[`font_family_${item}`]}`} onClick={() => toggleFontFamily(item)}>{item}</li>
                })}
            </ul>
            
            <PreferencesTextPreview type={'font_family'} value={currentFontFamily} isThemeLight={isThemeLight} />

            <PreferencesPanelButtons togglePanel={togglePanel} fn={improveFontFamily} value={currentFontFamily} />
        </div>
    )
}

export default PreferencesFontFamily;