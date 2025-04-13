
// base
import styles from './PreferencesSwitch.module.css'


const PreferencesSwitch = ({ isThemeLight, isOn }) => {

    const styleTheme = isThemeLight ? styles.themeLight : styles.themeDark
    const styleIsOn = isOn ? styles.styleIsOn : "" 

    return (
        <button className={`${styles.preferenceSwitch} ${styleTheme} ${styleIsOn}`}>
            <div className={styles.circuleSwitch}></div>
        </button>
    )
}


export default PreferencesSwitch