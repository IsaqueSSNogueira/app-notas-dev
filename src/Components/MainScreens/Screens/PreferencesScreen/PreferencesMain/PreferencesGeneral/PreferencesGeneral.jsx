
// base
import { Icon } from '@iconify/react';
import styles from './PreferencesGeneral.module.css';

// components
import PreferencesSwitch from './PreferencesSwitch/PreferencesSwitch';


const PreferencesGeneral = ({ toggleTheme, isThemeLight, notificationsEnabled, toggleNotificationsState }) => {

    return (

        <div className={styles.containerListPreferences}>
            <h2 className={styles.title}>General</h2>
            <ul className={styles.list}>
                {/*language*/}
                <li className={styles.item}>
                    <Icon icon="material-symbols:emoji-language-outline" width={24} />
                    <span className={styles.preferenceName}>Language</span>
                    <div className={styles.preferenceValue}>English</div>
                </li>
                {/*lock*/}
                <li className={styles.item}>
                    <Icon icon="majesticons:lock-line" width={24} />
                    <span className={styles.preferenceName}>Lock app</span>
                    <div className={styles.preferenceValue}></div>
                </li>
                {/*date format*/}
                <li className={styles.item}>
                    <Icon icon="ant-design:field-time-outlined" width={24} />
                    <span className={styles.preferenceName}>Date format</span>
                    <div className={styles.preferenceValue}>dd/mm/yy</div>
                </li>
                {/*notifications*/}
                <li className={styles.item} onClick={() => toggleNotificationsState()}>
                    <Icon icon="mingcute:notification-line" width={24} />
                    <span className={styles.preferenceName}>Notifications</span>
                    <PreferencesSwitch isThemeLight={isThemeLight} isOn={notificationsEnabled} />
                </li>
                {/*theme dark*/}
                    <li className={styles.item} onClick={() => toggleTheme()}>
                    <Icon icon="tdesign:mode-dark" width={24} />
                    <span className={styles.preferenceName}>Theme dark</span>
                    <PreferencesSwitch fn={toggleTheme} isThemeLight={isThemeLight} isOn={!isThemeLight} />
                </li>
            </ul>
        </div>
    )
}


export default PreferencesGeneral;