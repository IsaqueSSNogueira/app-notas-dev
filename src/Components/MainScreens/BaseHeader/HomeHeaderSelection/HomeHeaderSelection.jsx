

// components
import SelectionMoreOptionsMenu from './SelectionMoreOptionsMenu/SelectionMoreOptionsMenu';

// base
import { useState, useEffect, useContext } from 'react';
import SelectedActionContext from "../../../../Data/SelectedActionProvider/SelectedActionContext";
import style from './HomeHeaderSelection.module.css';
import { Icon } from '@iconify/react';


const HomeHeaderSelection = ({ isThemeLight }) => {

    // provider
    const {selectedNotesCount, closeHeaderSelection, changeSelectedNotesCategory} = useContext(SelectedActionContext)

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;


    // toggle more options menu
    const [isOpenMoreOptionsMenu, setIsOpenMoreOptionsMenu] = useState(false)

    const toggleMoreOptionsMenu = () => {
        setIsOpenMoreOptionsMenu(prev => !prev)
    }


    // JSX Markup
    return (
        <header className={`${style.homeHeader} ${styleTheme}`}>

            <Icon icon="mdi:arrow-left" width="28" onClick={() => closeHeaderSelection()}/>

            <div className={style.selectionContainer}>
                <span>{selectedNotesCount}</span>
                <span>Selecionadas</span>
            </div>

            <div className={style.iconContainerRight}>
                <div>
                    <Icon icon="material-symbols:more-vert" width={25} height={27} onClick={toggleMoreOptionsMenu} />
                    <SelectionMoreOptionsMenu toggleMoreOptionsMenu={toggleMoreOptionsMenu} isOpenMoreOptionsMenu={isOpenMoreOptionsMenu} changeSelectedNotesCategory={changeSelectedNotesCategory} isThemeLight={isThemeLight} />
                </div>
            </div>

        

        </header>
    )
}

export default HomeHeaderSelection