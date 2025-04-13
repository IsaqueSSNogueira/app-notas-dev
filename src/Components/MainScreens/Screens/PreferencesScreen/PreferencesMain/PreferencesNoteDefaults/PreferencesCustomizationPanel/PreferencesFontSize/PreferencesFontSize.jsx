
// base
import { Icon } from '@iconify/react'
import styles from './PreferencesFontSize.module.css'
import { useEffect, useState } from 'react';

// components
import PreferencesPanelButtons from '../PreferencesPanelButtons/PreferencesPanelButtons';
import PreferencesTextPreview from '../PreferencesTextPreview/PreferencesTextPreview';


const PreferencesFontSize = ({ fontSize, arrayFontSize, improveFontSize, togglePanel, isThemeLight }) => {


    // base
    const [currentFontSizeIndex, setCurrentFontSizeIndex] = useState(arrayFontSize.findIndex(item => item === fontSize))
    const [currentFontSize, setCurrentFontSize] = useState(arrayFontSize[currentFontSizeIndex])


    // function
    const toggleFontSize = (option) => {
        if(option === "addition" && currentFontSizeIndex < arrayFontSize.length - 1){
            setCurrentFontSizeIndex(prev => prev + 1)
        }
        else if(option === "subtraction" && currentFontSizeIndex > 0) {
            setCurrentFontSizeIndex(prev => prev - 1)
        }
    }

    // improve value
    useEffect(() => {
        setCurrentFontSize(arrayFontSize[currentFontSizeIndex])
    }, [currentFontSizeIndex])



    return (

        <div className={styles.containerPreference}>
            <h3 className={styles.titlePreference}>Font Size</h3>

            <div className={styles.containerPanel}>
                <button className={styles.button}  onClick={() => toggleFontSize("subtraction")}>
                    <Icon icon='subway:subtraction-1' width={12} />
                </button>
                <span>{currentFontSize}</span>
                <button className={styles.button}  onClick={() => {toggleFontSize("addition")}}>
                    <Icon icon='pixelarticons:plus' width={18} />
                </button>
            </div>

            <PreferencesTextPreview type={'font_size'} value={currentFontSize} isThemeLight={isThemeLight} />

            <PreferencesPanelButtons togglePanel={togglePanel} fn={improveFontSize} value={currentFontSize} />

        </div>
    )
}

export default PreferencesFontSize