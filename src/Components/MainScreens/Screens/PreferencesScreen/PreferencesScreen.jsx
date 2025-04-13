
// components
import PreferencesHeader from './PreferencesHeader/PreferencesHeader';
import PreferencesMain from './PreferencesMain/PreferencesMain';

// base
import style from './PreferencesScreen.module.css';
import { useContext} from 'react';
import PreferencesContext from '../../../../Data/PreferencesProvider/PreferencesContext';




const PreferencesScreen = () => {

    // theme
    const {isThemeLight, toggleTheme, notificationsEnabled, toggleNotificationsState} = useContext(PreferencesContext)

    return (

        <div className={style.mainContainer}>
            <PreferencesHeader isThemeLight={isThemeLight} />
            <PreferencesMain 
                isThemeLight={isThemeLight} 
                toggleTheme={toggleTheme} 
                notificationsEnabled={notificationsEnabled} 
                toggleNotificationsState={toggleNotificationsState} 
            />
        </div>
    )
}

export default PreferencesScreen;