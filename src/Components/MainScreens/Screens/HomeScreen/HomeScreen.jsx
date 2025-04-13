
// components
import HomeHeaderSelection from './../../BaseHeader/HomeHeaderSelection/HomeHeaderSelection';
import MainHeader from './/MainHeader/MainHeader';
import HomeMain from './HomeMain/HomeMain';
import DeviceCompatibilityScreen from '../../../DeviceCompatibilityScreen/DeviceCompatibilityScreen';

// base
import style from './HomeScreen.module.css';
import { useContext } from 'react';
import SelectedActionContext from './../../../../Data/SelectedActionProvider/SelectedActionContext';
import PreferencesContext from '../../../../Data/PreferencesProvider/PreferencesContext';


const HomeScreen = () => {

    // theme
    const {isThemeLight} = useContext(PreferencesContext)
    const {isSelectionMode} = useContext(SelectedActionContext)

    return (

        <div className={style.mainContainer}>

            <DeviceCompatibilityScreen />

            {/*main header*/}
            {!isSelectionMode && <MainHeader isThemeLight={isThemeLight} />}
            {/*header selection*/}   
            {isSelectionMode && <HomeHeaderSelection isThemeLight={isThemeLight} />}
            {/*main*/}
            <HomeMain isThemeLight={isThemeLight} isSelectionMode={isSelectionMode} />
        </div>
    )
}

export default HomeScreen;