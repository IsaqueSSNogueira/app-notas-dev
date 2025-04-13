
// base
import { Icon } from '@iconify/react';
import styles from './PreferencesNoteDefaults.module.css';
import { useContext, useState } from 'react';

// context
import PreferencesCustomizationPanel from './PreferencesCustomizationPanel/PreferencesCustomizationPanel';
import PreferencesContext from '../../../../../../Data/PreferencesProvider/PreferencesContext';
import StylesContext from '../../../../../../Data/StylesProvider/StylesContext';



const PreferencesNoteDefaults = ({ isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? styles.themeLight : styles.themeDark

    const {fontSize, fontFamily, textColor, colorNote, resetDefaultPreferences} = useContext(PreferencesContext)

    // toggle panel
    const [panelIsOpen, setPanelIsOpen] = useState(false)
    const [currentPanel, setCurrentPanel] = useState('')
    const togglePanel = (value = false, type = 'fontSize') => {
        setPanelIsOpen(value)
        setCurrentPanel(type)
    }

    // note colors
    const {noteColors} = useContext(StylesContext)
    const currentColorNote = noteColors.find(item => item.id === colorNote)

    return (

        <div className={`${styles.containerListPreferences} ${styleTheme}`}>
            <h2 className={styles.title}>Note defaufts</h2>
            <ul className={styles.list}>
                {/*font family*/}
                <li className={styles.item} onClick={() => togglePanel(true, 'fontFamily')}>
                    <Icon icon="icomoon-free:font" width={20} />
                    <span className={styles.preferenceName}>Font family</span>
                    <div className={styles.preferenceValue}>{fontFamily}</div>
                </li>
                {/*font size*/}
                <li className={styles.item} onClick={() => togglePanel(true, 'fontSize')}>
                    <Icon icon="fluent:text-font-24-regular" width={24} />
                    <span className={styles.preferenceName}>Font size</span>
                    <div className={styles.preferenceValue}>{fontSize}px</div>
                </li>
                {/*text color*/}
                <li className={styles.item} onClick={() => togglePanel(true, 'textColor')}>
                    <Icon icon="proicons:text-color" width={24} />
                    <span className={styles.preferenceName}>Text color</span>
                    <div className={`${styles.textColor} ${styles[`text_color_${textColor}`]}`}>Color</div>
                </li>
                {/*note color*/}
                <li className={styles.item} onClick={() => togglePanel(true, 'noteColor')}>
                    <Icon icon="ic:outline-color-lens" width={24} />
                    <span className={styles.preferenceName}>Note color</span>
                    <div className={styles.noteColor} style={{backgroundColor: currentColorNote.noteColorBase}}></div>
                </li>

                {/*reset preferences*/}
                <li className={styles.itemReset} onClick={() => resetDefaultPreferences()}>
                    <Icon icon="material-symbols:reset-shadow" width={22} />
                    <span className={styles.preferenceName}>Reset preferences</span>
                </li>
            </ul>

            {panelIsOpen && <PreferencesCustomizationPanel togglePanel={togglePanel} currentPanel={currentPanel} isThemeLight={isThemeLight} />}

        </div>
    )
}


export default PreferencesNoteDefaults;