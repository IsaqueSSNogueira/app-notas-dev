
// base
import styles from './PreferencesTextPreview.module.css'


const PreferencesTextPreview = ({ type, value, isThemeLight }) => {

    const styleTheme = isThemeLight ? styles.themeLight : styles.themeDark

    return (
        <div className={`${styles.previewContainer} ${styleTheme}`}>
            <h4 className={styles.titlePreview}>Preview</h4>
            <p className={`${styles.previewText} ${styles[`${type}_${value}`]}`}>Text</p>
        </div>
    )
}

export default PreferencesTextPreview;