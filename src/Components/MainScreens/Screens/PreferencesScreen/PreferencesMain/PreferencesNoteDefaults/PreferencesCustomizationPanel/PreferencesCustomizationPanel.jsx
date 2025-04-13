
// base
import { useContext } from 'react'
import styles from './PreferencesCustomizationPanel.module.css'

// context
import PreferencesContext from '../../../../../../../Data/PreferencesProvider/PreferencesContext'

// components
import PreferencesFontSize from './PreferencesFontSize/PreferencesFontSize'
import PreferencesFontFamily from './PreferencesFontFamily/PreferencesFontFamily'
import PreferencesTextColor from './PreferencesTextColor/PreferencesTextColor'
import PreferencesNoteColor from './PreferencesNoteColor/PreferencesNoteColor'


const PreferencesCustomizationPanel = ({ isThemeLight, togglePanel, currentPanel }) => {

    const {fontSize, fontFamily, textColor, colorNote, setColorNote, arrayFontSize, arrayFontFamily, arrayTextColor, improveFontSize, improveFontFamily, improveTextColor, improveColorNote} = useContext(PreferencesContext)
    const styleTheme = isThemeLight ? styles.themeLight : styles.themeDark

    return (
        <div className={`${styles.shadowBackground}`}>
            <div className={`${styles.defaultConfigContainer} ${styleTheme}`}>

            {(() => {
                switch (currentPanel) {
                    case "fontFamily":
                        return <PreferencesFontFamily fontFamily={fontFamily} arrayFontFamily={arrayFontFamily} improveFontFamily={improveFontFamily} togglePanel={togglePanel} isThemeLight={isThemeLight} />;
                    case "fontSize":
                        return <PreferencesFontSize fontSize={fontSize} arrayFontSize={arrayFontSize} improveFontSize={improveFontSize} togglePanel={togglePanel} isThemeLight={isThemeLight} />;
                    case "textColor":
                        return <PreferencesTextColor textColor={textColor} arrayTextColor={arrayTextColor} improveTextColor={improveTextColor} togglePanel={togglePanel} isThemeLight={isThemeLight} />;
                    case "noteColor":
                        return <PreferencesNoteColor  togglePanel={togglePanel} colorNote={colorNote} setColorNote={setColorNote} improveColorNote={improveColorNote} />
                    default:
                        return <PreferencesFontSize fontSize={fontSize} arrayFontSize={arrayFontSize} improveFontSize={improveFontSize} togglePanel={togglePanel} isThemeLight={isThemeLight} />;
                }
            })()}

            </div>
        </div>
    )
}

export default PreferencesCustomizationPanel;