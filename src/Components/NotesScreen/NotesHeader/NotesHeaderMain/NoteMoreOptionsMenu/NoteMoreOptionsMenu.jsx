

// providers
import NoteActionsContext from '../../../../../Data/NoteActions/NoteActionsContext';
import NotesContext from "./../../../../../Data/NotesProvider/NotesContext"

// base
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import style from './NoteMoreOptionsMenu.module.css'


const NoteMoreOptionsMenu = ({ menuMoreIsOpen, onClick, isThemeLight, iconMenu }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // providers
    const {toggleNoteStatus} = useContext(NoteActionsContext)
    const {everyNotesSource, setEveryNotesSource} = useContext(NotesContext);
    const {id} = useParams();


    // toggle text menu
    const [textActions, setTextActions] = useState({})
    useEffect(() => {
        setTimeout(() => {
            everyNotesSource.find(item => 
                item.id === Number(id) ?
                    setTextActions({
                        isFavorite: item.isFavorite,
                        isArchived: item.isArchived,
                        isDeleted: item.isDeleted
                    })
                : null
            )
        }, 50)
    }, [everyNotesSource])


    // text var
    const textFavorite = textActions.isFavorite ? "Remover de favoritas" : "Adicionar as favoritas";
    const textArchived = textActions.isArchived ? "Desarquivar nota" : "Arquivar nota";
    const textDeleted = textActions.isDeleted ? "Restaurar nota" : "Deletar nota";

    return (
        <div className={`${style.moreOptionsMenuContainer} ${styleTheme}`} style={{display: menuMoreIsOpen ?  'block' : 'none'}} onClick={onClick}>
            <ul className={style.links}>
                {/*favorite*/}
                <li onClick={() => toggleNoteStatus('isFavorite', id)}>
                    <span className={style.iconArea}>
                        <Icon icon={textActions.isFavorite ? "iconamoon:star-off" : "iconamoon:star"} width={18} />
                    </span>
                    {textFavorite}
                </li>
                {/*archived*/}
                <li onClick={() => toggleNoteStatus('isArchived', id)}>
                    <span className={style.iconArea}>
                        <Icon icon={textActions.isArchived ? "bx:archive-out" : "bx:archive-in"} width={19} />
                    </span>{textArchived}
                </li>
                {/*deleted*/}
                <li onClick={() => toggleNoteStatus('isDeleted', id)}>
                    <span className={style.iconArea}>
                        <Icon icon={textActions.isDeleted ? "fa6-solid:trash-can-arrow-up" : "mdi:trash-outline"} width={textActions.isDeleted ? 15 : 21} />
                    </span>
                    {textDeleted}
                    </li>
            </ul>
        </div>
    )
}

export default NoteMoreOptionsMenu;