
// components

// base
import style from './PreferencesHeader.module.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';




const PreferencesHeader = ({ isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;


    return (

        <header className={`${style.header} ${styleTheme}`}>
            <Link to="/" className={style.iconClose}><Icon icon="mdi:arrow-left" width={28} /></Link>
            <div className={style.titleArea}>
                <Icon icon="hugeicons:preference-vertical" width={20} />
                <span>Preferences</span>
            </div>
        </header>
    )
}

export default PreferencesHeader;