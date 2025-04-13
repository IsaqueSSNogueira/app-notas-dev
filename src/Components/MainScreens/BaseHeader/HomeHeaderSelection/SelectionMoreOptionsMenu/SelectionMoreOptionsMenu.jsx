

// base
import SelectedActionContext from "../../../../../Data/SelectedActionProvider/SelectedActionContext";
import { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Icon } from '@iconify/react';
import style from './SelectionMoreOptionsMenu.module.css'


const SelectionMoreOptionsMenu = ({ toggleMoreOptionsMenu, isOpenMoreOptionsMenu, isThemeLight, changeSelectedNotesCategory }) => {

    // style
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;
    const [screen, setScreen] = useState(true)
    const [trashScreen, setTrashScreen] = useState()
    const [archivedScreen, setArchivedScreen] = useState()
    const [favoritesScreen, setFavoritesScreen] = useState()

    const { filter } = useParams();

    useEffect(() => {
      if (filter) {
        setTrashScreen(filter === 'trash');
        setArchivedScreen(filter === 'archived');
        setFavoritesScreen(filter === 'favorites');
        setScreen(false)
      } else {
        setTrashScreen(false);
        setArchivedScreen(false);
        setFavoritesScreen(false);
        setScreen(true)
      }
    }, [filter]);
    




    const {toggleSelectedNotesStatus} = useContext(SelectedActionContext)

    // text var
    const pinned = {
        state: screen,
        text: !screen ? "Desfixar" : "Fixar notas",
        icon: !screen ? "tabler:pinned-filled" : "tabler:pinned",
        width:23,
    }
    const moveCategoy = {
        state: screen,
        text: "Mover para a categoria...",
        icon: "solar:book-linear",
        width: 21,
    }
    const favorite = {
        state: screen,
        text: !screen ? "Remover de favoritas" : "Adicionar as favoritas",
        icon: !screen ? "iconamoon:star-off" : "iconamoon:star",
        width: 18,
    }
    const archived = {
        state: screen,
        text: !screen ? "Desarquivar nota" : "Arquivar notas",
        icon: !screen ? "bx:archive-out" : "bx:archive-in",
        width: 19,
    }
    const deleted = {
        state: screen,
        text: !screen ? "Restaurar nota" : "Deletar nota",
        icon: !screen ? "fa6-solid:trash-can-arrow-up" : "mdi:trash-outline",
        width: !screen ? 15 : 21,
    }

    return (
        <div className={`${style.moreOptionsMenuContainer} ${styleTheme}`} style={{display: isOpenMoreOptionsMenu ?  'block' : 'none'}} onClick={() => toggleMoreOptionsMenu()}>
            <ul className={style.links}>

                {/*pinned*/}
                {screen &&
                    <li onClick={() => toggleSelectedNotesStatus("isPinned")}>
                        <span className={style.iconArea}><Icon icon={pinned.icon} width={pinned.width} /></span>
                        {pinned.text}
                    </li> }

                {/*category*/}
                {/*<li  onClick={() => changeSelectedNotesCategory("Todas")}>
                    <span className={style.iconArea}><Icon icon={textActions.isDeleted ? "fa6-solid:trash-can-arrow-up" : "solar:book-linear"} width={textActions.isDeleted ? 15 : 21} /></span>
                    {textMoveCategory}
                </li>*} */}

                {/*favorite*/}
                {(screen || favoritesScreen) && 
                    <li onClick={() => toggleSelectedNotesStatus("isFavorite")}>
                        <span className={style.iconArea}><Icon icon={favorite.icon} width={favorite.width} /></span>
                        {favorite.text}
                    </li> }

                {/*archived*/}
                {(screen || favoritesScreen || archivedScreen) && 
                <li  onClick={() => toggleSelectedNotesStatus("isArchived")}>
                    <span className={style.iconArea}><Icon icon={archived.icon} width={archived.width} /></span>
                    {archived.text}
                </li> }

                {/*deleted*/}
                <li  onClick={() => toggleSelectedNotesStatus("isDeleted")}>
                    <span className={style.iconArea}><Icon icon={deleted.icon} width={deleted.width} /></span>
                    {deleted.text}
                </li> 
            </ul>
        </div>
    )
}

export default SelectionMoreOptionsMenu;